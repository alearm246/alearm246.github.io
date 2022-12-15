import './App.css';
import Board from "../src/components/common/Board/Board";
import KeyBoard from "../src/components/common/KeyBoard/KeyBoard";
import { BoardContextProvider } from './context/BoardContext';
import useSecretWord from './customHooks/useSecretWord';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Wordle Game in React JS!!!</h1>
      </header>
      <BoardContextProvider>
        <div className="game-container">
          <div className="board-container">
            <Board />
          </div>
          <div className="keyboard-container">
            <KeyBoard />
          </div>  
        </div> 
      </BoardContextProvider>
    </div>
  );
}

export default App;
