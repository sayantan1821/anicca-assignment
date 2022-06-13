import React, { useEffect, useState } from "react";
import axios from "axios";

const UserBox = ({ btnRed, btnGreen }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  }, []);
  return (
    <div style={{border: "5px solid black", padding: "40px 60px"}}>
      {userData.map((data, idx) => {
        return (
            <div
              key={idx}
              style={{
                width: "20vw",
                border: `5px solid ${idx % 2 != 0 ? btnGreen : btnRed}`,
                margin: "5px auto"
              }}
            >
              <p>{data.username}</p>
              <p>{data.address.city}</p>
            </div>
        );
      })}
    </div>
  );
};

export default UserBox;
