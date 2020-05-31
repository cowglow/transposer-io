import React from 'react';
import './App.css';
import NoteInput from "../note-input/note-input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoteInput />
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
