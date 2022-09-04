import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import globeSocketIo from "../../../globeVar ";
import InboxLeftSide from "./InboxLeftSide";
import InboxRoom from "./InboxRoom";

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
    }, 3000);
  }, [updateCount]);

  useEffect(() => {
    // get data
    socket.current.on("get-online-user", (user) => {
      setActiveUser(user);
      console.log("this is all online user : ", user);

      // update active user at setTimeOut
    });
  }, [socket]);

  useEffect(() => {
    // get data
    socket.current.on("get-all-online-user", (user) => {
      setActiveUser(user);
      console.log("this is all online user : ", user);

      // update active user at setTimeOut
    });
  }, [socket]);

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
  }, [InboxLeftSideCall, updateCount]);

  // inbox left side
  useEffect(() => {
    fetch("https://glacial-shore-36532.herokuapp.com/getInboxLeftSideInfo")
      .then((response) => response.json())
      .then((json) => {
        setInboxLeftSideInfo(json);
        setActiveUser(activeUser);
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, quisquam! Lorem ipsum dolor sit amet consectetur,
                tatibus eaque ex? Maxime perferendis voluptatibus illum.
                Explicabo veniam saepe officiis.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 InboxContainer ">
          <div className="row p-2">
            <div className="col-3 p-2  inbox-left">
              <div
                className="p-2"
                style={{
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                  height: "450px",
                }}
              >
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
            <div className="col-4 p-2  inbox-right">
              <div
                className="p-2"
                style={{ border: "2px solid #fec400", borderRadius: "10px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                deleniti reiciendis ad officia natus cumque, repudiandae
                inventore nobis fugit pariatur? Quas exercitationem ipsum
                impedit amet debitis asperiores adipisci omnis quisquam officia.
                Esse, temporibus architecto? Esse debitis obcaecati placeat
                laborum necessitatibus temporibus quis minima nobis molestiae
                culpa nihil, fugiat quo incidunt qui quidem dolor repellendus
                sed veritatis animi dolorem. Aliquid tenetur explicabo officiis
                odit ipsa deleniti magni quas enim. Ipsa perferendis impedit
                iusto debitis, recusandae odio pariatur officia dignissimos
                sint. Accusantium placeat, optio pariatur vero iusto ullam ut.
                Soluta est dolorum incidunt iure, voluptas laborum consequatur
                esse, error libero nesciunt animi!
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
  }
`;
