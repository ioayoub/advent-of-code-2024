import { readFileSync } from "node:fs";
import { join } from "node:path";

const input: string = readFileSync(join(__dirname, "/data/input.txt"), "utf-8");
const rows: string[] = input.split("\n");

let safeResults: number = 0;

/**
 * Checks if the given array of numbers is "safe".
 * An array is considered "safe" if:
 * - The absolute difference between any two consecutive elements is not greater than 3.
 * - The array is either strictly increasing or strictly decreasing.
 *
 * @param arr - The array of numbers to check.
 * @returns `true` if the array is safe, `false` otherwise.
 */
const isSafe = (arr: number[]): boolean => {
  let isIncreasing: boolean = arr[0] < arr[1];

  for (let i: number = 1; i < arr.length; i++) {
    if (
      Math.abs(arr[i] - arr[i - 1]) > 3 ||
      (isIncreasing && arr[i] <= arr[i - 1]) ||
      (!isIncreasing && arr[i] >= arr[i - 1])
    ) {
      return false;
    }
  }

  return true;
};

/**
 * Removes an element from an array at the specified index.
 *
 * @param arr - The array from which to remove the element.
 * @param index - The index of the element to remove.
 * @returns A new array with the element removed.
 */
const removeElement = (arr: number[], index: number) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

/**
 * Checks if the given array is safe. If not, it tries removing each element one by one
 * to see if the resulting array is safe.
 *
 * @param arr - The array of numbers to check.
 * @returns A string "Safe" if the array or any of its subarrays (with one element removed) is safe, otherwise "Unsafe".
 */
const checkIfItsSafe = (arr: number[]): string => {
  if (isSafe(arr)) {
    return "Safe";
  }

  // recursively check if the array is safe after removing each element
  for (let i = 0; i < arr.length; i++) {
    const newArr = removeElement(arr, i);

    if (isSafe(newArr)) {
      return "Safe";
    }
  }

  return "Unsafe";
};

rows.forEach((r) => {
  const currentRow = r.split(" ").map(Number);
  const result = checkIfItsSafe(currentRow);
  if (result === "Safe") {
    safeResults++;
  }
});

console.log(safeResults);
