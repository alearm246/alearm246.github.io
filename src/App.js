import './App.css';
import React from "react";
import Board from "../src/components/common/Board/Board";
import KeyBoard from "../src/components/common/KeyBoard/KeyBoard";
import { BoardContextProvider } from './context/BoardContext';
import { BoardContext } from './context/BoardContext';
import useSecretWord from './customHooks/useSecretWord';

function App() {
  return (
    <BoardContextProvider>
      <div className="App">
        <header className="header">
          <h1 style={{fontFamily: "Arial"}}>Alejandro's Wordle</h1>
        </header>
        <div className="game-container">
          <div className="board-container">
            <Board />
          </div>
          <div className="keyboard-container">
            <KeyBoard />
          </div>  
        </div>  
      </div>
    </BoardContextProvider>
  );
}

export default App;
