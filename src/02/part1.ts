import { readFileSync } from "node:fs";
import { join } from "node:path";

const input = readFileSync(join(__dirname, "/data/input.txt"), "utf-8");
const rows = input.split("\n");

let safeResults = 0;

const checkIfItsSafe = (arr: number[]): string => {
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i + 1]);

    if (diff > 3) {
      console.log(arr[i] - arr[i + 1], "diff more than 3");
      return "Unsafe";
    }

    if (arr[i] === arr[i + 1]) {
      return "Unsafe";
    }

    if (
      (arr[0] < arr[1] && arr[i] >= arr[i + 1]) ||
      (arr[0] >= arr[1] && arr[i] <= arr[i + 1])
    ) {
      console.log(
        arr[0] < arr[1] ? "increase" : "decrease",
        arr[i] - arr[i + 1]
      );
      return "Unsafe";
    }
  }

  safeResults++;
  return "Safe";
};

rows.forEach((r) => {
  const currentRow = r.split(" ").map((r) => +r);
  checkIfItsSafe(currentRow);
});

console.log(safeResults);
