export function decodedValue(colors: (typeof COLORS)[number][]) {
  const arrayStringColors = colors.map((color, index) => {
    if (index > 1) return;
    return COLORS.indexOf(color);
  });

  return Number(arrayStringColors.join(""));
}

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;
