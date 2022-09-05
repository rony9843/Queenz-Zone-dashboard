import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function InboxAccountDetalis({ userAllAcount, inboxRoom }) {
  console.log("this is user all info : ", userAllAcount);

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const thisUser = userAllAcount.filter((dt) => dt.email == inboxRoom);

    console.log("this is this user info : --->> ", thisUser);
    setCurrentUser(thisUser[0]);
  }, [inboxRoom]);

  return (
    <UserDetalisBack>
      <div>
        <div className="option_header">Name :</div>
        <div className="ans">{currentUser.displayName}</div>
        <div className="option_header">Email :</div>
        <div className="ans">{currentUser.email}</div>
        <div className="option_header">Phone Number :</div>
        <div className="ans">{currentUser.phoneNumber}</div>
        <div className="option_header">Address :</div>
        <div className="ans">{currentUser.address}</div>
        <div className="option_header">Date Of Account Creation :</div>
        <div className="ans">
          {new Date(currentUser.time).getDay() +
            "/" +
            new Date(currentUser.time).getMonth() +
            "/" +
            new Date(currentUser.time).getFullYear()}{" "}
        </div>

        <div className="option_header">Time Of Account Creation :</div>
        <div className="ans">
          {new Date(currentUser.time).getHours() +
            ":" +
            new Date(currentUser.time).getMinutes() +
            ":" +
            new Date(currentUser.time).getSeconds()}
          {}
        </div>
      </div>
    </UserDetalisBack>
  );
}

const UserDetalisBack = styled.div`
  .option_header {
    background-color: #fff6cd;
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
    transition: 2.5s;
    font-weight: bold;
    color: #fec400;
  }
  .option_header:hover {
    // text-align: center;
    transition: 2.5s;
    padding-left: 100px;
  }
  .ans {
    padding: 3px;

    border-radius: 0px 0px 5px 5px;
    cursor: pointer;
    transition: 2.5s;
    font-size: 16px;
    color: gray;
  }
  .ans:hover ~ .option_header {
    transition: 2.5s;
    padding-left: 100px;
  }
`;
