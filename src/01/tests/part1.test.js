describe("part1.ts", () => {
  it("calculates the correct result for sorted arrays", () => {
    const sortedEntries1 = [1, 2, 3];
    const sortedEntries2 = [4, 5, 6];
    const res = sortedEntries1.reduce((acc, val, i) => acc + Math.abs(val - sortedEntries2[i]), 0);
    expect(res).toEqual(9);
  });

  it("calculates the correct result for arrays with negative numbers", () => {
    const sortedEntries1 = [-1, -2, -3];
    const sortedEntries2 = [-4, -5, -6];
    const res = sortedEntries1.reduce((acc, val, i) => acc + Math.abs(val - sortedEntries2[i]), 0);
    expect(res).toEqual(9);
  });

  it("calculates the correct result for arrays with mixed positive and negative numbers", () => {
    const sortedEntries1 = [-1, 2, -3];
    const sortedEntries2 = [4, -5, 6];
    const res = sortedEntries1.reduce((acc, val, i) => acc + Math.abs(val - sortedEntries2[i]), 0);
    expect(res).toEqual(21);
  });

  it("calculates the correct result for arrays with zeros", () => {
    const sortedEntries1 = [0, 0, 0];
    const sortedEntries2 = [0, 0, 0];
    const res = sortedEntries1.reduce((acc, val, i) => acc + Math.abs(val - sortedEntries2[i]), 0);
    expect(res).toEqual(0);
  });

  it("calculates the correct result for empty arrays", () => {
    const sortedEntries1= [];
    const sortedEntries2 = [];
    const res = sortedEntries1.reduce((acc, val, i) => acc + Math.abs(val - sortedEntries2[i]), 0);
    expect(res).toEqual(0);
  });
});