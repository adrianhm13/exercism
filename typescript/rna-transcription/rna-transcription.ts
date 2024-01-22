const MAPPER: { [key: string]: string } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(value: string) {
  return value
    .split("")
    .map((char) => {
      if (MAPPER.hasOwnProperty(char)) {
        return MAPPER[char];
      } else {
        throw new Error("Invalid input DNA.");
      }
    })
    .join("");
}
