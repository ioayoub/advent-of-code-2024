import fs from "node:fs";
import path from "node:path";

const input: string = fs.readFileSync(
  path.join(__dirname, "/input.txt"),
  "utf8"
);
const rows: string[] = input.split("\n");

let sum: number = 0;

/**
 * Counts the number of occurrences of a given pattern in a string.
 *
 * @param str - The string to search within.
 * @param pattern - The regular expression pattern to match against the string.
 * @returns The number of times the pattern occurs in the string.
 */
const countOccurrences = (str: string, pattern: RegExp) =>
  [...str.matchAll(pattern)].length;

/**
 * Reverses the given string.
 *
 * @param str - The string to be reversed.
 * @returns The reversed string.
 */
const reverseString = (str: string) => str.split("").reverse().join("");

// Count matches in rows and their reversals (horizontal)
rows.forEach((row) => {
  sum += countOccurrences(row, /XMAS/g);
  sum += countOccurrences(reverseString(row), /XMAS/g);
});

// Count matches in columns (vertical)
for (let col = 0; col < rows[0].length; col++) {
  const vertical = rows.map((row) => row[col]).join("");
  sum += countOccurrences(vertical, /XMAS/g);
  sum += countOccurrences(reverseString(vertical), /XMAS/g);
}

/**
 * Extracts all diagonals from a 2D array of strings.
 *
 * This function returns an array of strings where each string represents a diagonal
 * from the input 2D array. It considers both top-left to bottom-right and top-right
 * to bottom-left diagonals.
 *
 * @param data - A 2D array of strings from which to extract diagonals.
 * @returns An array of strings, each representing a diagonal from the input array.
 */
const getDiagonals = (data: string[][]): string[] => {
  const diagonals: string[] = [];

  // Top-left to bottom-right
  for (let i = 0; i < data.length; i++) {
    diagonals.push(
      data
        .map((_, j) => data[i + j]?.[j])
        .filter(Boolean)
        .join("")
    );
  }
  for (let i = 1; i < data[0].length; i++) {
    diagonals.push(
      data
        .map((_, j) => data[j]?.[i + j])
        .filter(Boolean)
        .join("")
    );
  }

  // Top-right to bottom-left
  for (let i = 0; i < data.length; i++) {
    diagonals.push(
      data
        .map((_, j) => data[i + j]?.[data[0].length - 1 - j])
        .filter(Boolean)
        .join("")
    );
  }
  for (let i = 1; i < data[0].length; i++) {
    diagonals.push(
      data
        .map((_, j) => data[j]?.[data[0].length - 1 - (i + j)])
        .filter(Boolean)
        .join("")
    );
  }

  return diagonals;
};

const diagonals: string[] = getDiagonals(rows.map((row) => row.split("")));
diagonals.forEach((diag) => {
  sum += countOccurrences(diag, /XMAS/g);
  sum += countOccurrences(reverseString(diag), /XMAS/g);
});

console.log(sum);
