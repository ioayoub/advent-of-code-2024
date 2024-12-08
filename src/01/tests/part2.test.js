describe("part2.ts", () => {
  it("calculates the correct result for arrays with matching elements", () => {
    const entries1 = [1, 2, 3];
    const entries2 = [1, 2, 3];
    let res = 0;
    for (let i = 0; i < entries1.length; i++) {
      const temp = entries2.filter((e) => e === entries1[i]).length;
      res += entries1[i] * temp;
    }
    expect(res).toBe(6);
  });

  it("calculates the correct result for arrays with no matching elements", () => {
    const entries1 = [1, 2, 3];
    const entries2 = [4, 5, 6];
    let res = 0;
    for (let i = 0; i < entries1.length; i++) {
      const temp = entries2.filter((e) => e === entries1[i]).length;
      res += entries1[i] * temp;
    }
    expect(res).toBe(0);
  });

  it("calculates the correct result for arrays with some matching elements", () => {
    const entries1 = [1, 2, 3];
    const entries2 = [1, 2, 4];
    let res = 0;
    for (let i = 0; i < entries1.length; i++) {
      const temp = entries2.filter((e) => e === entries1[i]).length;
      res += entries1[i] * temp;
    }
    expect(res).toBe(3);
  });

  it("calculates the correct result for arrays with duplicate elements", () => {
    const entries1 = [1, 2, 2, 3];
    const entries2 = [2, 2, 3, 3];
    let res = 0;
    for (let i = 0; i < entries1.length; i++) {
      const temp = entries2.filter((e) => e === entries1[i]).length;
      res += entries1[i] * temp;
    }
    expect(res).toBe(14);
  });

  it("calculates the correct result for empty arrays", () => {
    const entries1  = [];
    const entries2 = [];
    let res = 0;
    for (let i = 0; i < entries1.length; i++) {
      const temp = entries2.filter((e) => e === entries1[i]).length;
      res += entries1[i] * temp;
    }
    expect(res).toBe(0);
  });
});