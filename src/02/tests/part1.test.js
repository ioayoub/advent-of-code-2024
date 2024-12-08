const { checkIfItsSafe } = require("../part1");

describe("part1.ts", () => {
  it("returns Safe for strictly increasing array with differences <= 3", () => {
    const result = checkIfItsSafe([1, 2, 3, 4]);
    expect(result).toBe("Safe");
  });

  it("returns Safe for strictly decreasing array with differences <= 3", () => {
    const result = checkIfItsSafe([4, 3, 2, 1]);
    expect(result).toBe("Safe");
  });

  it("returns Unsafe for array with difference greater than 3", () => {
    const result = checkIfItsSafe([1, 5, 2]);
    expect(result).toBe("Unsafe");
  });

  it("returns Unsafe for array with consecutive equal elements", () => {
    const result = checkIfItsSafe([1, 1, 2, 3]);
    expect(result).toBe("Unsafe");
  });

  it("returns Unsafe for array with non-monotonic sequence", () => {
    const result = checkIfItsSafe([1, 3, 2, 4]);
    expect(result).toBe("Unsafe");
  });

  it("returns Safe for array with single element", () => {
    const result = checkIfItsSafe([1]);
    expect(result).toBe("Safe");
  });

  it("returns Safe for empty array", () => {
    const result = checkIfItsSafe([]);
    expect(result).toBe("Safe");
  });
});