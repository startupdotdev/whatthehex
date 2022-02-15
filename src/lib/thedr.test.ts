import { isBinary, isDecimal, isHex } from "$lib/thedr"

describe("Detection function", () => {
  test("#isBinary", () => {
    expect(isBinary("010101")).toEqual(true);
    expect(isBinary("0b10101")).toEqual(true);
    expect(isBinary("01b0101")).toEqual(false);
    expect(isBinary("0b109101")).toEqual(false);
    expect(isBinary("100090001")).toEqual(false);
  });

  test("#isDecimal", () => {
    expect(isDecimal("10101")).toEqual(true);
    expect(isDecimal("1999")).toEqual(true);
    expect(isDecimal("19a99")).toEqual(false);
    expect(isDecimal("199.9")).toEqual(false);
  });

  test("#isHex", () => {
    expect(isHex("0xff")).toEqual(true);
    expect(isHex("fa10913a")).toEqual(true);
    expect(isHex("fa1g0913a")).toEqual(false);
    expect(isHex("199.9")).toEqual(false);
  });
});