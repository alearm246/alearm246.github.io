import './App.css';
import React, { useEffect } from "react";
import Header from "./components/common/Header/Header";
import { BoardContextProvider } from './context/BoardContext';
import { UserContextProvider } from './context/UserContext';
import SinglePlayerGame from './components/modules/SinglePlayerGame/SinglePlayerGame';
import HomeScreen from './components/modules/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <BoardContextProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/single-player" element={<SinglePlayerGame />} />
            </Routes>       
          </div>
        </Router>
      </BoardContextProvider>
    </UserContextProvider>
  );
}

export default App;
