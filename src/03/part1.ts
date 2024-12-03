import fs from "node:fs";
import path from "node:path";

const input = fs.readFileSync(path.join(__dirname, "/input.txt"), "utf8");

const mulRegex = /mul\((\d+),(\d+)\)/g;
const extractedArray: RegExpMatchArray | null = input.match(mulRegex);

const numbersRegex = /\d+/g;

let res: number = 0;

if (extractedArray) {
  extractedArray.forEach((element) => {
    const numbers = element.match(numbersRegex);
    if (numbers) {
      const [a, b] = numbers;
      res += Number(a) * Number(b);
    }
  });
}

console.log(res);
