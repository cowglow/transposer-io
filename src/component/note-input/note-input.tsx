import React from "react";
import { TransposeNotes } from "../../lib/transpose-notes";
import { isNote } from "../../lib/note-range";

const NoteInput = () => {
  const separator = ",";
  const [notes, setNotes] = React.useState<string>("");

  const clickHandler = (direction: string) => {
    const noteArr = notes.split(separator);
    const newNotes = TransposeNotes(noteArr, direction);
    setNotes(newNotes.join(separator));
  };

  const changeHandler: React.KeyboardEventHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.keyCode === 8) {
      const noteArr = notes.split(separator);
      const newNoteArr = noteArr.splice(0, noteArr.length - 1);
      setNotes(newNoteArr.join(separator));
    }

    if (isNote(event.key)) {
      const newValue = event.key.toUpperCase();
      if (notes) {
        setNotes(notes + separator + newValue);
      } else {
        setNotes(newValue);
      }
    }
  };

  return (
    <React.Fragment>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        onKeyDown={changeHandler}
        value={notes}
      />
      <div>
        <button
          onClick={() => {
            clickHandler("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            clickHandler("-");
          }}
        >
          -
        </button>
      </div>
    </React.Fragment>
  );
};

export default NoteInput;
