import fs from "node:fs";
import path from "node:path";

const input: string = fs.readFileSync(
  path.join(__dirname, "/input.txt"),
  "utf8"
);

let result: number = 0;

const doDontRegex = /(do\(\)|don't\(\))/;
const mulRegex = /mul\((\d+),(\d+)\)/g;

let isEnabled = true;

input.split(doDontRegex).forEach((chunk): void => {
  if (chunk === "do()") isEnabled = true;
  if (chunk === "don't()") isEnabled = false;
  else if (isEnabled) {
    chunk.replace(mulRegex, (_, a, b): string => {
      result += parseInt(a) * parseInt(b);
      return _;
    });
  }
});

console.log(result);
