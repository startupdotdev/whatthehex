export function isHex(i: string): boolean {
  const matchesHexRegex = (i: string) => /^[0-9a-fA-F][0-9a-fA-F]*[0-9a-fA-F]$/.test(i);
  return (i.indexOf('0x') === 0 && matchesHexRegex(i.slice(2))) ||
    matchesHexRegex(i);
}

export function isBinary(i: string): boolean {
  const matchesBinRegex = (i: string) => /^[0-1][0-1]*[0-1]$/.test(i);
  return (i.indexOf('0b') === 0 && matchesBinRegex(i.slice(2))) ||
    matchesBinRegex(i);
}

export function isDecimal(i: string): boolean {
  return /^[1-9][0-9]*[0-9]$/.test(i);
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