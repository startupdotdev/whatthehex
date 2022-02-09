export function isHex(i: string): boolean {
  return i.indexOf('0x') === 0;
}

export function isBinary(i: string): boolean {
  return i.indexOf('0b') === 0;
}

export function isDecimal(i: string): boolean {
  return i.indexOf('0') === 0;
}

export function hexToHex(i: string): string {
  return parseInt(i, 16).toString(16);
}

export function hexToBinary(i: string): string {
  return parseInt(i, 16).toString(2);
}

export function hexToDecimal(i: string): string {
  return parseInt(i, 16).toString(10);
}

export function binaryToBinary(i: string): string {
  return parseInt(i, 2).toString(2);
}

export function binaryToDecimal(i: string): string {
  return parseInt(i, 2).toString(10);
}

export function binaryToHex(i: string): string {
  return parseInt(i, 2).toString(16);
}

export function decimalToDecimal(i: string): string {
  return parseInt(i, 10).toString(10);
}

export function decimalToBinary(i: string): string {
  return parseInt(i, 10).toString(2);
}

export function decimalToHex(i: string): string {
  return parseInt(i, 10).toString(16);
}