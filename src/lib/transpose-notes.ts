import { noteRange } from "./note-range";

export const TransposeNotes = (notes: string[], direction: string) => {
  return notes.map(value => {
    const max = noteRange.length - 1;
    const noteIndex = noteRange.indexOf(value);
    let newNoteIndex: number = 0;

    if (direction === "+") {
      if (noteIndex + 1 <= max) {
        newNoteIndex = noteIndex + 1;
      }
    }

    if (direction === "-") {
      if (noteIndex - 1 >= 0) {
        newNoteIndex = noteIndex - 1;
      } else {
        newNoteIndex = max;
      }
    }

    return noteRange[newNoteIndex];
  });
};
