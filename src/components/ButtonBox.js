import React from "react";

const ButtonBox = ({ setBtnRed, setBtnGreen }) => {
  return (
    <div>
      <button onClick={() => setBtnGreen("green")}>even green</button>
      <button onClick={() => setBtnRed("red")}>odd red</button>
      <button
        onClick={() => {
          setBtnRed("black");
          setBtnGreen("black");
        }}
      >
        all black
      </button>
    </div>
  );
};

export default ButtonBox;
