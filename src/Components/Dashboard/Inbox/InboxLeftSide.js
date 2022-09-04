import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import randomColor from "randomcolor";
import React, { useEffect, useState } from "react";
import styledCom from "styled-components";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

export default function InboxLeftSide({
  dt,
  seInboxRoom,
  inboxRoom,
  activeUser,
  updateCount,
}) {
  // online user select
  const [onlineUser, setOnlineUser] = useState();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: ` ${onlineUser ? "#44b700" : "red"} `,
      color: ` ${onlineUser ? "#44b700" : "red"} `,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  // const socket = useRef();
  // socket.current = io(globeSocketIo);

  const golData = dt;

  // for call useEffect
  const [callUseEffect, seCallUseEffect] = useState(false);

  // all message
  const [allMessage, setAllMessage] = useState(false);

  // for fetch message
  useEffect(() => {
    //  console.log("this is json ", golData);
    // get message
    fetch(
      `https://glacial-shore-36532.herokuapp.com/getInboxOneMessage?roomName=${golData.room}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is json ", json);
        // const filterData = json.filter(
        //   (dt) => dt.message.room === golData.room
        // );
        // //  console.log("this is data : ", filterData);
        // let arry = !filterData.length === true ? [] : filterData;
        // let lastElement = arry[arry.length - 1];
        // //   console.log(lastElement.message.time);
        // setAllMessage(
        //   lastElement.message.time ? lastElement.message.time : false
        // );

        setAllMessage(json[0].message.time ? json[0].message.time : false);
      });

    seCallUseEffect(false);
  }, [callUseEffect, inboxRoom, updateCount]);

  // socket io

  // useEffect(() => {
  //   // get data
  //   socket.current.on("get-message", (user) => {
  //     seCallUseEffect(true);
  //   });

  //   /// active user filter
  //   // console.log(
  //   //   "this is active user value : ",
  //   //   activeUser.onlineUser.oldUserInfo !== null
  //   //     ? activeUser.onlineUser.oldUserInfo.email
  //   //     : "kichu nai"
  //   // );

  //   // if (activeUser[0].onlineUser.activeUserInfo === "old") {
  //   //   console.log(
  //   //     "this is value : ",
  //   //     activeUser[0].onlineUser.oldUserInfo.email
  //   //   );

  //   //   setOnlineUser(activeUser[0].onlineUser.oldUserInfo.email === dt.room);
  //   // }  else {
  //   //   console.log(
  //   //     "this is value : ",
  //   //     activeUser[0].onlineUser.activeUserNumber
  //   //   );

  //   //   setOnlineUser(activeUser[0].onlineUser.activeUserNumber === dt.room);
  //   // }

  //   //  activeUser.map(dt=> dt. inboxRoom.room )
  // }, [socket]);

  // for active user filter
  useEffect(() => {
    if (!activeUser.length === false) {
      if (activeUser[0].onlineUser.activeUserInfo === "old") {
        setOnlineUser(activeUser[0].onlineUser.oldUserInfo.email === dt.room);
      } else {
        setOnlineUser(activeUser[0].onlineUser.activeUserNumber === dt.room);
      }
    } else {
      setOnlineUser(false);
    }
  }, [activeUser]);

  // useEffect(() => {
  //   if (!activeUser.length) {
  //     setOnlineUser(false);
  //   } else {
  //     const filterData = activeUser.filter((udata) =>
  //       udata.onlineUser.activeUserInfo === "old"
  //         ? udata.onlineUser.oldUserInfo.email === dt.room
  //         : udata.onlineUser.activeUserNumber === dt.room
  //     );

  //     setOnlineUser(!filterData.length === true ? false : true);
  //   }

  //   //    setActiveUser(user);
  // }, []);

  return (
    <InboxLeftSideBack onClick={() => seInboxRoom(dt.room)}>
      {" "}
      <div
        className={` ${
          inboxRoom === dt.room && "activeOption"
        } d-flex w-100 main-div`}
      >
        <div>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            {" "}
            <Avatar sx={{ bgcolor: randomColor }}>
              {dt.room.charAt(0)}
            </Avatar>{" "}
          </StyledBadge>
        </div>
        <div style={{ marginLeft: "5px", fontSize: "14px" }}>
          <div>
            <span>
              <b>@{dt.room}</b>
            </span>
          </div>
          <div>
            <span style={{ color: "gray", fontSize: "13px" }}>
              {allMessage !== false
                ? timeAgo.format(new Date(allMessage))
                : "----"}
            </span>
          </div>
        </div>
      </div>
    </InboxLeftSideBack>
  );
}

const InboxLeftSideBack = styledCom.div`
  display : flex;
 transition : 0.5s;
 
  .main-div{
    align-items: center;
    margin-top:10px;
    border-radius : 20px 5px  5px  20px ;
    cursor : pointer;
  }
  .activeOption{
    background-color: #ffde4d47;
 
    transition : 0.5s;
  }

  .main-div:hover{
    background-color: #ffde4d47;
 
    transition : 0.5s;
  }

`;
