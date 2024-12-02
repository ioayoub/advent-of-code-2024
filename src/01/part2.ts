import { entries1, entries2 } from "./index";

let res: number = 0;

for (let i: number = 0; i < entries1.length; i++) {
  const temp: number = entries2.filter((e) => e === entries1[i]).length;

  res += entries1[i] * temp;
}

console.log(res);
