import logo from "./logo.svg";
import "./App.css";
import UserBox from "./components/UserBox";
import ButtonBox from "./components/ButtonBox";
import { useState } from "react";

function App() {
  const [btnGreen, setBtnGreen] = useState("black");
  const [btnRed, setBtnRed] = useState("black");
  return (
    <div className="App">
      <UserBox btnGreen={btnGreen} btnRed={btnRed} />
      <ButtonBox setBtnGreen={setBtnGreen} setBtnRed={setBtnRed} />
    </div>
  );
}

export default App;
