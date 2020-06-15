type scale = string[];

/**
 * MAJOR KEY STRUCTURE
 * WHOLE STEP - WHOLE STEP - HALF STEP - WHOLE STEP - WHOLE STEP - WHOLE STEP - HALF STEP
 *
 * CIRCLE OF FIFTHS
 * C D E F G A B
 */

// 7 steps for the sharps
const majorC: scale = ["C",  "D",  "E",  "F",  "G",  "A",  "B"]; // No Sharps
const majorG: scale = ["C",  "D",  "E",  "F#", "G",  "A",  "B"]; // 1 - F#
const majorD: scale = ["C#", "D",  "E",  "F#", "G",  "A",  "B"]; // 2 - F# C#
const majorA: scale = ["C#", "D",  "E",  "F#", "G#", "A",  "B"]; // 3 - F# C# G#
const majorE: scale = ["C#", "D#", "E",  "F#", "G#", "A",  "B"]; // 4 - F# C# G# D#
const majorB: scale = ["C#", "D#", "E",  "F#", "G#", "A#", "B"]; // 5 - F# C# G# D# A#
const majorF: scale = ["C#", "D#", "E#", "F#", "G#", "A#", "B"]; // 6 - F# C# G# D# A# E#

// 4 for the flats

interface musicalSignatures {
  label: string;
  keys: scale;
}

export const majorKeys: musicalSignatures[] = [
  { label: "major C", keys: majorC },
  { label: "major D", keys: majorD },
  { label: "major E", keys: majorE },
  { label: "major F", keys: majorF },
  { label: "major G", keys: majorG },
  { label: "major A", keys: majorA },
  { label: "major B", keys: majorB }
];
