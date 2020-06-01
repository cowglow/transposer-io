type scale = string[];

const majorC: scale = ["C", "D", "E", "F", "G", "A", "B"];

const majorG: scale = ["C", "D", "E", "F", "G#", "A", "B"]; // 1 #

const majorD: scale = ["C#", "D", "E", "F", "G#", "A", "B"]; // 2 #

const majorA: scale = ["C#", "D", "E", "F#", "G#", "A", "B"]; // 3 #

const majorE: scale = ["C#", "D#", "E", "F#", "G#", "A", "B"]; // 4 #

const majorB: scale = ["C#", "D#", "E", "F#", "G#", "A#", "B"]; // 5 #

const majorF: scale = ["C#", "D#", "E#", "F#", "G#", "A#", "B#"]; // #6

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

/**
 * MAJOR KEY STRUCTURE
 *
 * C
 * WHOLE STEP
 * D
 * WHOLE STEP
 * E
 * HALF STEP
 * F
 * WHOLE STEP
 * G
 * WHOLE STEP
 * A
 * WHOLE STEP
 * B
 * HALF STEP
 * C
 *
 */
