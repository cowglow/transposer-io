export const noteRange = ["A", "B", "C", "D", "E", "F", "G"];

export const noteSet = new Set("abcdefgABCDEFG");

export const isNote = (note: string): boolean => {
  return noteSet.has(note);
};
