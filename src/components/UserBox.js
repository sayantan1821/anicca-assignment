import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonBox from "./ButtonBox";

const UserBox = () => {
  const [userData, setUserData] = useState([]);
  const [borderColor, setBorderColor] = useState("black")
  const [btnGreen, setBtnGreen] = useState("black");
  const [btnRed, setBtnRed] = useState("black");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  }, []);
  return (
    <div style={{width: "30vw", margin: "auto"}}>
      {userData.map((data, idx) => {
        return <p key={idx} style={{width: "20vw", border: `5px solid ${idx % 2 == 0 ? btnGreen : btnRed}`}}>{data.username}</p>;
      })}
      <ButtonBox setBtnGreen={setBtnGreen} setBtnRed={setBtnRed} />
    </div>
  );
};

export default UserBox;
