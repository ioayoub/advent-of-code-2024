import fs from "node:fs";
import path from "node:path";

const input = fs.readFileSync(path.join(__dirname, "/input.txt"), "utf8");
const rows = input.split("\n").map((row) => row.split(""));

let sum = 0;

/**
 * Checks if the given sequence matches either "MAS" or "SAM".
 *
 * @param sequence - The sequence to check.
 * @returns  if the sequence is "MAS" or "SAM".
 */
const isMatch = (sequence: string) => sequence === "MAS" || sequence === "SAM";

for (let i = 1; i < rows.length - 1; i++) {
  for (let j = 1; j < rows[i].length - 1; j++) {
    if (rows[i][j] === "A") {
      const firstMas = rows[i - 1][j - 1] + rows[i][j] + rows[i + 1][j + 1];
      const secondMas = rows[i - 1][j + 1] + rows[i][j] + rows[i + 1][j - 1];

      console.log(firstMas);

      if (isMatch(firstMas) && isMatch(secondMas)) {
        sum++;
      }
    }
  }
}

console.log(sum);
