import React from "react";

const ButtonBox = ({ setBtnRed, setBtnGreen }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "20vw",
          display: "flex",
          flexDirection: "column",
          height: "30%",
          justifyContent: "space-around",
          border: "5px solid",
          padding: "30px",
        }}
      >
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
    </div>
  );
};

export default ButtonBox;
