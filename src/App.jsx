import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(140);
  const [undoStack, setUndoStack] = useState([0]);
  const [redoStack, setRedoStack] = useState([]);

  const handleAdd = () => {
    if (num < 150) {
      setUndoStack([...undoStack, num + 1]);
      setRedoStack([]);
      setNum(num + 1);
    }
  };

  const handleSubtract = () => {
    if (num > 0) {
      setUndoStack([...undoStack, num - 1]);
      setRedoStack([]);
      setNum(num - 1);
    }
  };

  const handleUndo = () => {
    if (undoStack.length > 1) {
      const newRedoStack = [...redoStack, undoStack.pop()];
      setRedoStack(newRedoStack);
      setNum(undoStack[undoStack.length - 1]);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const redoVal = redoStack.pop();
      setUndoStack([...undoStack, redoVal]);
      setNum(redoVal);
    }
  };

  return (
    <div className="app">
      <h1>Number: {num}</h1>
      <div className="buttons">
        <button onClick={handleSubtract}>Subtract 1</button>
        <button onClick={handleAdd}>Add 1</button>
      </div>
      <div className="buttons">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${(num / 150) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default App;
