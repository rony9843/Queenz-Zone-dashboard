import LoupeIcon from "@mui/icons-material/Loupe";
import MailIcon from "@mui/icons-material/Mail";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InboxAccountDetalis from "./InboxAccountDetalis";
import InboxLeftSide from "./InboxLeftSide";
import InboxRoom from "./InboxRoom";
import Notes from "./Notes";
import OrderDetalis from "./OrderDetalis";

export default function Inbox({ activeUserGlobal }) {
  console.log("this is active user global : ", activeUserGlobal);

  const [activeUser, setActiveUser] = useState([]);

  const [InboxLeftSideCall, setInboxLeftSideCall] = useState(false);

  // useEffect(() => {
  //   setcallUse(true);
  //   console.log("this is all online user : ");
  // }, []);

  const [updateCount, setUpdateCount] = useState(1);

  useEffect(() => {
    setTimeout(function () {
      setUpdateCount(updateCount + 1);
      console.log("this is all online user inbox : ", activeUser);
    }, 3000);
  }, [updateCount]);

  // ^ start socket io
  // const socket = useRef();

  // useEffect(() => {
  //   // get data
  //   // socket.current.emit("user-connected", (user) => {});

  //   socket.current = io(globeSocketIo);

  //   // get data
  //   socket.current.on("get-user-connected", (user) => {
  //     setActiveUser(user);

  //     console.log("this is all online user 1 : ", user);

  //     // update active user at setTimeOut
  //   });
  // }, [socket]);

  // useEffect(() => {
  //   // get data
  //   socket.current = io(globeSocketIo);
  //   // get data
  //   socket.current.on("get-online-user-disconnect", (user) => {
  //     setActiveUser(user);
  //     console.log("this is all online user 4 : ", user);

  //     // update active user at setTimeOut
  //   });
  // }, [socket]);

  // //call
  // useEffect(() => {
  //   socket.current = io(globeSocketIo);
  //   // get data
  //   socket.current.on("get-online-user", (user) => {
  //     setActiveUser(user);
  //     console.log("this is all online user 2 : ", user);

  //     // update active user at setTimeOut
  //   });
  // }, [socket, updateCount]);

  // ! enddddddd

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
    fetch(
      "https://queenzzoneserver-production.up.railway.app/getInboxLeftSideInfo"
    )
      .then((response) => response.json())
      .then((json) => {
        setInboxLeftSideInfo(json);

        console.log("this is update left side : ", activeUser);

        setInboxLeftSideCall(false);
      });
  }, [InboxLeftSideCall, updateCount, setInboxLeftSideCall]);

  // inbox left side
  useEffect(() => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/getInboxLeftSideInfo"
    )
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
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCreateInbox",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ props }),
      }
    )
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
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneFindAllProduct"
    )
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
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneFindAllUser"
    )
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

  const [oldText, setOldText] = useState("");

  const [notesNoti, setNotesNoti] = useState(false);

  useEffect(() => {
    fetch(
      `https://queenzzoneserver-production.up.railway.app/queenZoneInboxNotesFind?roomName=${inboxRoom}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is length :: ", !json.length);

        console.log("this is length :: ", !json[0].notes);
        setNotesNoti(json[0].notes !== "" ? true : false);
        console.log("this is data : ", inboxRoom);
        setText(json[0].notes);
        setOldText(json[0].notes);
      });
  }, [inboxRoom]);

  // ^ user all order
  const [userOrder, setUserOrder] = useState(false);

  useEffect(() => {
    fetch(
      `https://queenzzoneserver-production.up.railway.app/queenZoneOrderFindOneUser?email=${inboxRoom}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is order :: ", !json.length);
        console.log("this is order :: inside : -> ", json);
        console.log(
          "this is update for user oder count inside : ",
          updateCount
        );

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
                    <span>Online : {activeUserGlobal.length}</span>
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
                  {!activeUserGlobal.length === false &&
                    activeUserGlobal.map((dt, index) => (
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
                              <div class="d-flex justify-content-center">
                                ---
                              </div>
                            </div>
                            <div className="col-3">
                              {" "}
                              <div class="d-flex justify-content-center">
                                ---
                              </div>
                            </div>
                            <div className="col-2">
                              {" "}
                              <div class="d-flex justify-content-center">
                                ---
                              </div>
                            </div>
                            <div className="col-2">
                              {" "}
                              <div class="d-flex justify-content-center">
                                ---
                              </div>
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
                        InboxLeftSideCall={InboxLeftSideCall}
                        updateCount={updateCount}
                        inboxRoom={inboxRoom}
                        setUserRightSide={setUserRightSide}
                        seInboxRoom={seInboxRoom}
                        dt={dt}
                        activeUser={activeUserGlobal}
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
                {inboxRoom === "" ? (
                  <div className="emptyRoom">
                    <div className="mt-5 pt-5  d-flex justify-content-center">
                      <MailIcon
                        className="emptyRoom_icon"
                        style={{
                          border: "none",
                          fontSize: "100px",
                          marginTop: "70px",
                          opacity: "70%",
                        }}
                      ></MailIcon>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                      Please select any inbox
                    </div>
                  </div>
                ) : (
                  inboxOn && (
                    <InboxRoom
                      activeUser={activeUserGlobal}
                      inboxRoom={inboxRoom}
                      getProduct={getProduct}
                      setAllProduct={setAllProduct}
                      allProduct={allProduct}
                    ></InboxRoom>
                  )
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
                    {inboxRoom.includes("@") && (
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
                    )}
                    {inboxRoom.includes("@") && (
                      <div
                        className="px-2 w-100 d-flex justify-content-center"
                        style={{
                          alignContent: "space-between",
                          alignItems: "center",
                          backgroundColor: `${
                            userRightSide === "Order" ? "#fec400" : "white"
                          }`,
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => setUserRightSide("Order")}
                      >
                        <div>
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

                        {userOrder !== false && (
                          <div
                            class="spinner-grow text-primary mx-1"
                            role="status"
                            style={{ width: "10px", height: "10px" }}
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        )}
                      </div>
                    )}
                    {inboxRoom !== "" && (
                      <div
                        className={`px-2 w-100 d-flex ${
                          inboxRoom.includes("@")
                            ? "justify-content-end"
                            : "justify-content-center"
                        } d-flex align-items-center`}
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
                    )}
                  </div>
                  {inboxRoom !== "" && (
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
                  )}
                </div>

                {inboxRoom === "" ? (
                  <div className="inboxRightSideLoading ">
                    <div className=" d-flex justify-content-center">
                      <div>
                        <SpeakerNotesIcon className="inboxRightSideLoading_icon"></SpeakerNotesIcon>
                      </div>
                      <div>
                        <LoupeIcon className="inboxRightSideLoading_icon"></LoupeIcon>
                      </div>
                      <div>
                        <NoteAltIcon className="inboxRightSideLoading_icon"></NoteAltIcon>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <span className="inboxRightSideLoading_text">
                        Please select any inbox
                      </span>
                    </div>
                  </div>
                ) : (
                  <div>
                    {userRightSide === "Order"
                      ? userOrder !== false && (
                          <OrderDetalis userOrder={userOrder}></OrderDetalis>
                        )
                      : userRightSide === "Details" && (
                          <InboxAccountDetalis
                            inboxRoom={inboxRoom}
                            userAllAcount={userAllAcount}
                          ></InboxAccountDetalis>
                        )}

                    {userRightSide === "Order" && userOrder === false && (
                      <div>
                        <div class="d-flex justify-content-end">
                          <div
                            className="p-1 px-3"
                            style={{
                              backgroundColor: "#ff5959",
                              color: "white",
                              borderRadius: "5px",
                              width: "100px",
                              fontSize: "13px",
                            }}
                          >
                            <span className="px-2">Live</span>
                            <span
                              style={{ width: "15px", height: "15px" }}
                              class="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          </div>
                        </div>
                        <div
                          class="d-flex justify-content-center"
                          style={{ color: "gray" }}
                        >
                          ...Order not found...
                        </div>
                      </div>
                    )}

                    {/* {userRightSide === "Notes" && userOrder !== false && (
                    <Notes
                      inboxRoom={inboxRoom}
                      text={text}
                      setText={setText}
                    ></Notes>
                  )} */}
                    {userRightSide === "Notes" && (
                      <Notes
                        inboxRoom={inboxRoom}
                        text={text}
                        oldText={oldText}
                        setText={setText}
                        setOldText={setOldText}
                      ></Notes>
                    )}
                  </div>
                )}
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

  .emptyRoom {
    color: gray;
  }
  .emptyRoom_icon {
    animation: messageIcon 10s infinite;
  }

  .inboxRightSideLoading {
    margin-top: 200px;
  }
  .inboxRightSideLoading {
    color: gray;
  }
  .inboxRightSideLoading_icon {
    font-size: 40px;
    margin: 20px 10px;
    animation: messageIcon 5s infinite;
  }
  .inboxRightSideLoading_text {
    margin-top: 2px;
  }

  @keyframes messageIcon {
    from {
      rotate: -360deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
