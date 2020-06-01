import React from "react";
import circleOfFifths from "../../asset/circle-of-fifths.svg";
import "./App.css";
import NoteInput from "../note-input/note-input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Layout">
          <NoteInput />
          <div>&nbsp;</div>
          <img src={circleOfFifths} alt="Circle of Fifths" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
