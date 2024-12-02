import { entries1, entries2 } from "./index";

const sortedEntries1: number[] = entries1.sort((a, b) => a - b);
const sortedEntries2: number[] = entries2.sort((a, b) => a - b);

let res: number = 0;

for (let i: number = 0; i < sortedEntries1.length; i++) {
  res += Math.abs(sortedEntries1[i] - sortedEntries2[i]);
}

console.log(res);
