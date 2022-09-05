import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import globeSocketIo from "../../../globeVar ";
import InboxAccountDetalis from "./InboxAccountDetalis";
import InboxLeftSide from "./InboxLeftSide";
import InboxRoom from "./InboxRoom";
import Notes from "./Notes";
import OrderDetalis from "./OrderDetalis";

export default function Inbox() {
  const socket = useRef();
  socket.current = io(globeSocketIo);

  const [activeUser, setActiveUser] = useState([]);

  const [InboxLeftSideCall, setInboxLeftSideCall] = useState(false);

  const [callUse, setcallUse] = useState(false);

  // useEffect(() => {
  //   setcallUse(true);
  //   console.log("this is all online user : ");
  // }, []);

  const [updateCount, setUpdateCount] = useState(1);

  useEffect(() => {
    setTimeout(function () {
      setUpdateCount(updateCount + 1);
      console.log("this is all online user : ", activeUser);
    }, 3000);
  }, [updateCount]);

  useEffect(() => {
    // get data
    socket.current.emit("user-connected", (user) => {});

    // get data
    socket.current.on("get-user-connected", (user) => {
      setActiveUser(user);
      console.log("this is all online user 1 : ", user);

      // update active user at setTimeOut
    });
  }, [socket]);

  useEffect(() => {
    // get data

    // get data
    socket.current.on("get-online-user-disconnect", (user) => {
      setActiveUser(user);
      console.log("this is all online user 4 : ", user);

      // update active user at setTimeOut
    });
  }, [socket]);

  //call
  useEffect(() => {
    // get data
    socket.current.on("get-online-user", (user) => {
      setActiveUser(user);
      console.log("this is all online user 2 : ", user);

      // update active user at setTimeOut
    });
  }, [socket, updateCount]);

  // useEffect(() => {
  //   // get data
  //   socket.current.on("get-all-online-user", (user) => {
  //     setActiveUser(user);
  //     console.log("this is all online user : ", user);

  //     // update active user at setTimeOut
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   // for user left side user update
  //   // get data
  //   socket.current.on("get-inbox-left-side", (user) => {
  //     setInboxLeftSideCall(true);
  //   });

  //   setcallUse(false);
  // }, [socket, callUse]);

  const [inboxLeftSideInfo, setInboxLeftSideInfo] = useState([]);
  const [inboxRoom, seInboxRoom] = useState("");

  // inbox left side
  useEffect(() => {
    fetch("https://glacial-shore-36532.herokuapp.com/getInboxLeftSideInfo")
      .then((response) => response.json())
      .then((json) => {
        setInboxLeftSideInfo(json);

        console.log("this is update left side : ", activeUser);

        setInboxLeftSideCall(false);
      });
  }, [InboxLeftSideCall, updateCount, setInboxLeftSideCall]);

  // inbox left side
  useEffect(() => {
    fetch("https://glacial-shore-36532.herokuapp.com/getInboxLeftSideInfo")
      .then((response) => response.json())
      .then((json) => {
        setInboxLeftSideInfo(json);
        //     setActiveUser(activeUser);
      });
  }, []);

  // call use effect for update inbox left side data
  const callUseEffectForLeftInboxList = () => {
    setInboxLeftSideCall(true);
  };

  // create inbox
  const createInbox = (props) => {
    // post data
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneCreateInbox", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ props }),
    })
      .then((response) => response.json())
      .then((data) => {
        callUseEffectForLeftInboxList();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // ^ fetch product
  const [allProduct, setAllProduct] = useState([]);

  const getProduct = () => {
    // ? fetch all product
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindAllProduct")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setAllProduct(json);
      });
  };

  const [inboxOn, setInboxOn] = useState(false);

  const inboxLeftSideOnClick = () => {
    console.log("this is l;eft");
    setInboxOn(true);
  };

  // ^ get all user account

  const [userAllAcount, setUserAllAccount] = useState([]);

  useEffect(() => {
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindAllUser")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserAllAccount(json);
      });
  }, [updateCount]);

  // ^ user right side option
  const [userRightSide, setUserRightSide] = useState();

  // ^ notes

  const [text, setText] = useState("");
  const [notesNoti, setNotesNoti] = useState(false);

  useEffect(() => {
    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneInboxNotesFind?roomName=${inboxRoom}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is length :: ", !json.length);

        console.log("this is length :: ", !json[0].notes);
        setNotesNoti(json[0].notes !== "" ? true : false);
        console.log("this is data : ", inboxRoom);
        setText(json[0].notes);
      });
  }, [inboxRoom]);

  // ^ user all order
  const [userOrder, setUserOrder] = useState(false);

  useEffect(() => {
    fetch(
      `https://glacial-shore-36532.herokuapp.com/queenZoneOrderFindOneUser?email=${inboxRoom}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is order :: ", !json.length);
        console.log("this is order :: ", json);

        setUserOrder(!json.length === false ? json : false);
      });
  }, [inboxRoom, updateCount]);

  return (
    <InboxBack className="p-2">
      <div class="pt-2 d-flex justify-content-between">
        {" "}
        <div>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>Inbox</span>
        </div>
        <div className="">
          <div
            className="p-1 px-3"
            style={{
              backgroundColor: "#ff5959",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <span className="px-2"> Live</span>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
          </div>
        </div>
      </div>

      <div
        className="mt-2 p-2"
        style={{ border: "3px solid #fec400", borderRadius: "10px" }}
      >
        <div>
          <div className="row">
            <div className="col-8">
              {" "}
              <div
                className="p-2"
                style={{
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                  height: "300px",
                }}
              >
                <div
                  className="p-2 d-flex justify-content-between"
                  style={{ backgroundColor: "#ffde4d", borderRadius: "5px" }}
                >
                  <div>
                    <span>
                      <b>Active User Information</b>{" "}
                    </span>
                  </div>
                  <div>
                    <span>Online : {activeUser.length}</span>
                  </div>
                </div>
                <div style={{ margin: "5px 15px" }}>
                  <div
                    className="row "
                    style={{
                      fontWeight: "bold",
                      padding: "5px 0px",
                      backgroundColor: "#ffde4d59",
                      borderRadius: " 5px",
                    }}
                  >
                    <div className="col-2">
                      <div class="d-flex justify-content-center">Name</div>
                    </div>
                    <div className="col-3">
                      {" "}
                      <div class="d-flex justify-content-center">Email</div>
                    </div>
                    <div className="col-2">
                      {" "}
                      <div class="d-flex justify-content-center">Address</div>
                    </div>
                    <div className="col-2">
                      {" "}
                      <div class="d-flex justify-content-center">P num</div>
                    </div>

                    <div className="col-2">
                      {" "}
                      <div class="d-flex justify-content-center">User Num</div>
                    </div>
                    <div className="col-1">
                      {" "}
                      <div class="d-flex justify-content-center">Inbox</div>
                    </div>
                  </div>
                </div>
                <div
                  className="p-2 hideScroll"
                  style={{ overflow: "scroll", height: "203px" }}
                >
                  {activeUser.map((dt, index) => (
                    <div className="px-2 pt-1 ">
                      {dt.onlineUser.oldUserInfo !== null ? (
                        <div
                          className={` ${
                            index % 2 === 0 && " styleRowActiveUser"
                          } hoverStyle row`}
                          style={{
                            cursor: "pointer",
                            transition: "0.5s",
                            display: "flex",
                            fontSize: "14px",
                            alignItems: "center",
                          }}
                        >
                          <div className="col-2">
                            {" "}
                            <div class="d-flex justify-content-center">
                              {dt.onlineUser.oldUserInfo.displayName}
                            </div>
                          </div>
                          <div className="col-3">
                            {" "}
                            <div class="d-flex justify-content-center">
                              {dt.onlineUser.oldUserInfo.email}
                            </div>
                          </div>
                          <div className="col-2">
                            {" "}
                            <div class="d-flex justify-content-center">
                              {dt.onlineUser.oldUserInfo.address}
                            </div>
                          </div>
                          <div className="col-2">
                            {" "}
                            <div class="d-flex justify-content-center">
                              {dt.onlineUser.oldUserInfo.phoneNumber}
                            </div>
                          </div>

                          <div className="col-2">
                            {" "}
                            <div class="d-flex justify-content-center">
                              {dt.onlineUser.activeUserNumber}
                            </div>
                          </div>
                          <div className="col-1">
                            {" "}
                            <div class="d-flex justify-content-center">
                              <Button
                                onClick={() => createInbox(dt)}
                                style={{ color: "#ff0000" }}
                                size="small"
                              >
                                <b>Add</b>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={` ${
                            index % 2 === 0 && " styleRowActiveUser"
                          } hoverStyle row`}
                          style={{
                            cursor: "pointer",
                            transition: "0.5s",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "5px",
                          }}
                        >
                          <div className="col-2">
                            {" "}
                            <div class="d-flex justify-content-center">---</div>
                          </div>
                          <div className="col-3">
                            {" "}
                            <div class="d-flex justify-content-center">---</div>
                          </div>
                          <div className="col-2">
                            {" "}
                            <div class="d-flex justify-content-center">---</div>
                          </div>
                          <div className="col-2">
                            {" "}
                            <div class="d-flex justify-content-center">---</div>
                          </div>

                          <div className="col-2">
                            {" "}
                            <div class="d-flex justify-content-center">
                              {" "}
                              {dt.onlineUser.activeUserNumber}
                            </div>
                          </div>
                          <div className="col-1">
                            {" "}
                            <div class="d-flex justify-content-center">
                              <Button
                                onClick={() => createInbox(dt)}
                                style={{ color: "#ff0000" }}
                                size="small"
                              >
                                <b>Add</b>
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-4">
              {" "}
              <div
                className="p-2"
                style={{
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                }}
              >
                <div
                  className="p-2 mb-1 d-flex justify-content-between"
                  style={{ backgroundColor: "#ffde4d", borderRadius: "5px" }}
                >
                  <div>
                    <span>
                      <b>All User</b>{" "}
                    </span>
                  </div>
                  <div>
                    <span>Total : {userAllAcount.length}</span>
                  </div>
                </div>
                <div className="account_div">
                  {userAllAcount.map((ac) => (
                    <div
                      className="px-1 mt-1 pt-1 d-flex justify-content-between"
                      style={{
                        backgroundColor: "#FFF3C1",
                        borderRadius: "5px",
                      }}
                    >
                      <div className="p-1">
                        <span>{ac.email}</span>
                      </div>
                      <div>
                        <Button
                          style={{
                            backgroundColor: "#ffde4d",
                            boxShadow: "none",
                            color: "black",
                          }}
                          onClick={() =>
                            createInbox({
                              onlineUser: {
                                activeUserInfo: "old",
                                oldUserInfo: { email: ac.email },
                              },
                            })
                          }
                          size="small"
                          variant="contained"
                        >
                          ADD
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2  ">
          <div className="row p-2">
            <div className="col-3 p-2  inbox-left">
              <div className="p-2 InboxContainer">
                <div>
                  <div>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#fec400",
                      }}
                    >
                      Chats
                    </span>
                  </div>
                  <div>
                    <hr
                      style={{
                        margin: "5px",
                        color: " #fec400",
                        height: "4px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="inbox-left-side"
                  onClick={() => inboxLeftSideOnClick()}
                >
                  {inboxLeftSideInfo
                    .sort((a, b) => b.time.localeCompare(a.time))
                    .map((dt) => (
                      <InboxLeftSide
                        updateCount={updateCount}
                        inboxRoom={inboxRoom}
                        seInboxRoom={seInboxRoom}
                        dt={dt}
                        activeUser={activeUser}
                      >
                        {" "}
                      </InboxLeftSide>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-5 p-2  inbox-middle">
              <div
                className="p-2"
                style={{
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                  height: "510px",
                }}
              >
                {inboxOn && (
                  <InboxRoom
                    activeUser={activeUser}
                    inboxRoom={inboxRoom}
                    getProduct={getProduct}
                    setAllProduct={setAllProduct}
                    allProduct={allProduct}
                  ></InboxRoom>
                )}
              </div>
            </div>
            <div className="col-4 p-2  ">
              <div
                className="p-2 inbox-right"
                style={{ border: "2px solid #fec400", borderRadius: "10px" }}
              >
                <div>
                  <div class="d-flex justify-content-between">
                    {" "}
                    <div
                      className="px-2 w-100 "
                      style={{
                        backgroundColor: `${
                          userRightSide === "Details" ? "#fec400" : "white"
                        }`,
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => setUserRightSide("Details")}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: `${
                            userRightSide === "Details" ? "white" : "#fec400"
                          }`,
                        }}
                      >
                        Details
                      </span>
                    </div>
                    <div
                      className="px-2 w-100 d-flex justify-content-center"
                      style={{
                        backgroundColor: `${
                          userRightSide === "Order" ? "#fec400" : "white"
                        }`,
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => setUserRightSide("Order")}
                    >
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: `${
                            userRightSide === "Order" ? "white" : "#fec400"
                          }`,
                        }}
                      >
                        Order
                      </span>
                    </div>
                    <div
                      className="px-2 w-100 d-flex justify-content-end d-flex align-items-center"
                      style={{
                        backgroundColor: `${
                          userRightSide === "Notes" ? "#fec400" : "white"
                        }`,
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => setUserRightSide("Notes")}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: `${
                              userRightSide === "Notes" ? "white" : "#fec400"
                            }`,
                          }}
                        >
                          Notes
                        </span>
                      </div>
                      {notesNoti && (
                        <div
                          class="spinner-grow text-primary mx-1"
                          role="status"
                          style={{ width: "10px", height: "10px" }}
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <hr
                      style={{
                        margin: "5px",
                        color: " #fec400",
                        height: "4px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
                <div>
                  {userRightSide === "Notes" ? (
                    <Notes
                      inboxRoom={inboxRoom}
                      text={text}
                      setText={setText}
                    ></Notes>
                  ) : (
                    userRightSide === "Details" && (
                      <InboxAccountDetalis
                        inboxRoom={inboxRoom}
                        userAllAcount={userAllAcount}
                      ></InboxAccountDetalis>
                    )
                  )}
                  {userRightSide === "Order" && userOrder !== false && (
                    <OrderDetalis userOrder={userOrder}></OrderDetalis>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InboxBack>
  );
}

const InboxBack = styled.div`
  .hideScroll::-webkit-scrollbar {
    display: none;
  }
  .hoverStyle:hover {
    background-color: #b3b3b3eb;
    transition: 0.5s;
    border-radius: 5px;
  }
  .styleRowActiveUser {
    background-color: #e7e7e7;
    border-radius: 5px;
  }
  .inbox-left-side {
    overflow-y: scroll;
    height: 450px;
  }

  .inbox-left-side::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .inbox-left-side::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #b3b3b3eb;
    border-radius: 10px;
  }

  /* Handle */
  .inbox-left-side::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .inbox-left-side::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  .InboxContainer {
    border: 2px solid #fec400;
    border-radius: 10px;
    height: 510px;
  }

  .account_div {
    overflow-y: scroll;
    height: 235px;
  }
  .account_div::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .account_div::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #b3b3b3eb;
    border-radius: 10px;
  }

  /* Handle */
  .account_div::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .account_div::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  .inbox-right {
    height: 510px;
  }
`;
