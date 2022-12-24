import './App.css';
import { useEffect, useContext } from "react";
import Header from "./components/common/Header/Header";
import { BoardContextProvider } from './context/BoardContext';
import { UserContextProvider } from './context/UserContext';
import { ToastContextProvider } from './context/ToastContext';
import { SocketContext } from './context/SocketContext';
import SinglePlayerGame from './components/modules/SinglePlayerGame/SinglePlayerGame';
import OneVOneMode from './components/modules/OneVOneMode/OneVOneMode';
import HomeScreen from './components/modules/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {   
  const { socket } = useContext(SocketContext); 
  useEffect(() => {
      console.log("pathname: ", window.location);
      const handleBackButton = e => {
          alert("Going back will reset your current game. Do you want to continue");
      }
      window.addEventListener("beforeunload", handleBackButton);
      return () => {
          window.removeEventListener("beforeunload", handleBackButton);
      }
  }, [window.location]);

  useEffect(() => {
    socket.on("connect", (data) => {
      console.log("connected on socket on frontend");
      socket.emit("lol", "message from frontend");
    });
    return () => {
      socket.off("connect");
    }
  }, [socket]);

  return (

    <ToastContextProvider>
      <UserContextProvider>
        <BoardContextProvider>
            <Router>
              <div className="App">
                <Header />
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/single-player" element={<SinglePlayerGame />} />
                  <Route path="/one-v-one" element={<OneVOneMode />} />
                </Routes>       
              </div>
            </Router>
        </BoardContextProvider>
      </UserContextProvider>
    </ToastContextProvider>
  );
}

export default App;
