const colorCode = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type Colors = keyof typeof colorCode;

export function decodedResistorValue(bands: Colors[]): string {
  const baseValue = colorCode[bands[0]] * 10 + colorCode[bands[1]];
  const multiplier = Math.pow(10, colorCode[bands[2]]);
  const resistance = baseValue * multiplier;

  if (resistance >= 1e9) {
    return `${resistance / 1e9} gigaohms`;
  } else if (resistance >= 1e6) {
    return `${resistance / 1e6} megaohms`;
  } else if (resistance >= 1000) {
    return `${resistance / 1000} kiloohms`;
  } else {
    return `${resistance} ohms`;
  }
}
