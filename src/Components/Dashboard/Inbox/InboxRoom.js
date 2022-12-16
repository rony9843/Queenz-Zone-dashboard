import CancelIcon from "@mui/icons-material/Cancel";
import ImageIcon from "@mui/icons-material/Image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { deepOrange } from "@mui/material/colors";
import Modal from "@mui/material/Modal";
import React, { useEffect, useRef, useState } from "react";
import InputEmoji from "react-input-emoji";
import InputFiles from "react-input-files";
import styled from "styled-components";
import EditModal from "./EditModal";
import ModalProductList from "./ModalProductList";

// modal style
const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

export default function InboxRoom({
  inboxRoom,
  activeUser,
  getProduct,
  allProduct,
  setAllProduct,
}) {
  const [scroll, setScroll] = useState(true);

  // const socket = useRef();

  // socket.current = io(globeSocketIo);

  const messageEndRef = useRef(null);

  // ^ modal
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // product select
  const [selectedProduct, setSelectedProduct] = useState({
    img: [[[""]]],
    props: {
      _id: "",
    },
  });

  const [error, setError] = useState({
    status: true,
    msg: "",
  });

  const selectProductFunction = (props) => {
    console.log(props);
    setAllProduct(allProduct);
    setError({
      status: false,
      msg: "",
    });
    setSelectedProduct(props);
  };

  // ? send product at user
  const sendProduct = () => {
    console.log(
      "this is send product 1 : ",
      selectedProduct.img[0][0][0][0][0]
    );
    console.log(
      "this is send product 2 : ",
      !selectedProduct.img[0][0][0][0][0]
    );

    sendMessageBtn({ img: null, product: selectedProduct });
    handleClose();
  };

  // online user select
  const [onlineUser, setOnlineUser] = useState(false);

  // for active user filter
  useEffect(() => {
    if (!activeUser.length === false) {
      // if (activeUser[0].onlineUser.activeUserInfo === "old") {
      //   setOnlineUser(activeUser[0].onlineUser.oldUserInfo.email === inboxRoom);
      // } else {
      //   setOnlineUser(activeUser[0].onlineUser.activeUserNumber === inboxRoom);
      // }

      const filterActiveUser = activeUser.filter((acUser) =>
        acUser.onlineUser.activeUserInfo === "old"
          ? acUser.onlineUser.oldUserInfo.email === inboxRoom
          : acUser.onlineUser.activeUserInfo === "new" &&
            acUser.onlineUser.activeUserNumber === inboxRoom
      );

      // console.log(
      //   inboxRoom,
      //   " : this is active user filter infoooo  : ",
      //   filterActiveUser
      // );

      setOnlineUser(!filterActiveUser.length === false ? true : false);
    } else {
      setOnlineUser(false);
    }
  }, [activeUser, inboxRoom]);

  const handleScrollClick = () => {
    if (scroll) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [sendMessage, setSendMessage] = useState("");

  // for call useEffect
  const [callUseEffect, seCallUseEffect] = useState(false);

  //   useEffect(() => {
  //   bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  // }, [messages]);

  // const interval = setInterval(function () {
  //   // method to be executed;

  //   console.log("this is settime out");
  // }, 1000);

  // clearInterval(interval); // thanks @Luca D'Amico

  /// ============ file put
  const [inputFile, setInputFile] = useState({
    createObjectURL: "",
    fullImgDetails: "",
  });

  const [imageLoading, setImageLoading] = useState(false);

  const sendImageInDataBase = () => {
    setImageLoading(true);
    const data = new FormData();
    data.append("file", inputFile.fullImgDetails);
    data.append("upload_preset", "QueenzZone");

    fetch("https://api.cloudinary.com/v1_1/ddcppphbi/image/upload", {
      method: "POST", // or 'PUT'

      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        //   sendMessageBtn({ img: data.url });
        sendMessageBtn({ img: data.url, product: null });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // send image or message
  const sendMessageBtn = ({ img, product }) => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneInboxSendMessage",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room: inboxRoom,
          sender: "admin",
          receiver: inboxRoom,
          message: sendMessage,
          image: img ? img : null,
          product: product !== null ? product : null,
          time: new Date(),
          userSeen: "unseen",
          adminSeen: "seen",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        // post data socket io
        // socket.current.emit("new-message", inboxRoom);
        seCallUseEffect(true);
        handleScrollClick();
        setSendMessage("");
        setImageLoading(false);
        callMessage(inboxRoom);

        setInputFile({
          createObjectURL: "",
          fullImgDetails: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // all message
  const [allMessage, setAllMessage] = useState([]);

  // seen unseen
  const [seen, setSeen] = useState(false);

  const [visible, setVisible] = useState(false);

  const count = 1;

  // for fetch message
  useEffect(() => {
    console.log("this is useEffect message :----->,", inboxRoom);

    // get message

    if (inboxRoom !== "") {
      fetch(
        `https://queenzzoneserver-production.up.railway.app/getInboxMessage?roomName=${inboxRoom}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(
            `https://queenzzoneserver-production.up.railway.app/getInboxMessage?roomName=${inboxRoom}`
          );

          setAllMessage(json);
          handleScrollClick();
          seCallUseEffect(false);
        });
    }
  }, [inboxRoom]);

  // // for fetch message
  // useEffect(() => {
  //   if (inboxRoom !== "") {
  //     fetch(`http://localhost:5000/getInboxMessage?roomName=${inboxRoom}`)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(" this user chat update : 2 ", json);

  //         setAllMessage(json);
  //         handleScrollClick();
  //         seCallUseEffect(false);
  //       });
  //   }
  // }, [inboxRoom]);

  // socket io

  // useEffect(() => {
  //   handleScrollClick();

  //   // get data
  //   socket.current.on("get-message", (user) => {
  //     seCallUseEffect(true);
  //     handleScrollClick();
  //   });
  // }, [socket]);

  // for call useEffect

  // setTimeout(() => {
  //   if (inboxRoom !== "") {
  //     fetch(`http://localhost:5000/getInboxMessage?roomName=${inboxRoom}`)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(updateCount, " this user chat update : 3 ", json);
  //         setUpdateCount(updateCount + 1);
  //         setAllMessage(json);
  //         handleScrollClick();
  //         //  seCallUseEffect(false);
  //       });
  //   }
  // }, 5000);

  // const callMessage = () => {
  //   setTimeout(() => {
  //     setUpdateCount(updateCount + 1);
  //     if (inboxRoom !== "") {
  //       console.log(
  //         `http://localhost:5000/getInboxMessage?roomName=${inboxRoom}`
  //       );

  //       fetch(thisUserRoom)
  //         .then((response) => response.json())
  //         .then((json) => {
  //           console.log(
  //             updateCount,
  //             ` this user ${inboxRoom} chat update : 3 `,
  //             json
  //           );

  //           setAllMessage(json);
  //           handleScrollClick();
  //         });
  //     }
  //   }, 1000);
  // };

  const [updateCount, setUpdateCount] = useState(1);

  const callMessage = (props) => {
    if (inboxRoom !== "") {
      console.log(
        `https://queenzzoneserver-production.up.railway.app/getInboxMessage?roomName=${props}`
      );

      fetch(
        `https://queenzzoneserver-production.up.railway.app/getInboxMessage?roomName=${props}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(
            updateCount,
            ` this user ${props} chat update : 3 `,
            json
          );

          setUpdateCount(updateCount + 1);

          setAllMessage(json);
          handleScrollClick();
          fetchUpdateUnseenMessage(props);

          // user seen unseen

          const userSeenMsg = json.filter(
            (msg) => msg.message.userSeen !== "seen"
          );

          console.log("this is user message seen : ", userSeenMsg);

          setSeen(!userSeenMsg.length ? true : false);

          setVisible(!userSeenMsg.length ? true : false);
        });
    }
  };

  useEffect(() => {
    setTimeout(function () {
      callMessage(inboxRoom);
    }, 1000);
  }, [inboxRoom, updateCount]);

  const fetchUpdateUnseenMessage = (props) => {
    fetch(
      `https://queenzzoneserver-production.up.railway.app/adminSeenUpdateInboxMessage?roomName=${props}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(updateCount, ` seen update admin `, json);
      });
  };

  useEffect(() => {
    handleScrollClick();
  }, [inboxRoom]);

  // ================== submit btn

  function handleOnEnter() {
    sendMessage !== "" && sendMessageBtn({ img: null, product: null });
  }

  const [messageLoading, setmessageLoading] = useState(true);

  useEffect(() => {
    setmessageLoading(true);
    setTimeout(function () {
      setmessageLoading(false);
    }, 2000);
  }, [inboxRoom]);

  // ^ message edit

  const [editModalHtml, setEditModalHtml] = useState(false);

  const messageEdtBtn = ({ btn, dt }) => {
    console.log(btn, " : this is message edit : ", dt);
    setEditModalHtml(
      <EditModal
        dt={dt}
        btn={btn}
        setEditModalHtml={setEditModalHtml}
      ></EditModal>
    );
  };

  return (
    <InboxRoomBack>
      {/* modal for edit product */}
      {editModalHtml !== false && editModalHtml}
      {/* modal for suggest a product */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            <div
              className="row"
              style={{
                height: "520px",
                overflowY: "scroll",
              }}
            >
              {allProduct.map((pd) => (
                <ModalProductList
                  selectProductFunction={selectProductFunction}
                  pd={pd}
                  selectedProduct={selectedProduct}
                ></ModalProductList>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: " space-between",
                borderTop: "1px solid #fec400",
              }}
            >
              {error.status ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    padding: "",
                  }}
                >
                  <Alert style={{ padding: "0px 20px" }} severity="warning">
                    Please,select any product...
                  </Alert>
                </div>
              ) : (
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      style={{ width: "40px", borderRadius: "5px" }}
                      src={
                        selectedProduct.img[0][0][0] === "h"
                          ? selectedProduct.img[0][0]
                          : selectedProduct.img[0][0][0]
                      }
                      alt="product"
                    />
                    <div style={{ padding: "0px 10px" }}>
                      <span>
                        {!selectedProduct.props.ProductName
                          ? ""
                          : selectedProduct.props.ProductName}
                      </span>
                    </div>
                    <div
                      class="d-flex"
                      style={{ height: "30px", padding: "0px 0px" }}
                    >
                      <div class="vr"></div>
                    </div>
                    <div className=" d-flex" style={{ padding: "0px 10px" }}>
                      <div>
                        <span>
                          Price :{" "}
                          <b>
                            {!selectedProduct.props.ProductPrice
                              ? ""
                              : selectedProduct.props.ProductPrice}
                          </b>{" "}
                        </span>
                      </div>
                      <div className="px-2">
                        <span style={{ fontSize: "12px" }}>
                          Offer :{" "}
                          <s>
                            {" "}
                            <b>
                              {!selectedProduct.props.ProductOffer
                                ? ""
                                : selectedProduct.props.ProductOffer}
                            </b>{" "}
                          </s>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "10px 10px",
                }}
              >
                {" "}
                <div style={{ padding: "0px 10px" }}>
                  <Button
                    onClick={() => handleClose()}
                    variant="contained"
                    color="error"
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={() =>
                      selectedProduct.img === ""
                        ? setError({
                            status: true,
                            msg: "Please Select Any Product",
                          })
                        : sendProduct()
                    }
                    style={{ backgroundColor: "#fec400" }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="inbox_header d-flex justify-content-between align-items-center">
        <div>
          <div className="inbox_profile d-flex align-items-center">
            <div>
              <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                {inboxRoom.charAt(0)}
              </Avatar>
            </div>
            <div className="px-2" style={{ fontSize: "13px" }}>
              <div>
                <span>
                  <b>@{inboxRoom}</b>{" "}
                </span>
              </div>
              <div>
                {onlineUser ? (
                  <span style={{ fontSize: "14px", color: "#00d941" }}>
                    online
                  </span>
                ) : (
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    offline
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <div className="">
            <Button
              onClick={() => {
                setScroll(!scroll);
              }}
              style={{
                backgroundColor: `${scroll ? "#fec400" : "red"}`,
                boxShadow: "none",
              }}
              variant="contained"
              size="small"
            >
              Focus
            </Button>
          </div>
          <div className="px-2">
            <Button
              onClick={() => {
                handleOpenModal();
                getProduct();
              }}
              style={{ backgroundColor: "#fec400", boxShadow: "none" }}
              variant="contained"
              size="small"
            >
              Suggest A Product
            </Button>
          </div>
        </div>
      </div>
      {messageLoading ? (
        <div
          className="d-flex justify-content-center"
          style={{ height: "380px", padding: "100px 0px" }}
        >
          {" "}
          <CircularProgress style={{ width: "20px", height: "20px" }} />
        </div>
      ) : (
        <div className="message-box">
          {allMessage.map((msg, index) =>
            msg.message.image !== null ? (
              // for image
              <div
                key={index}
                className={`${
                  msg.message.sender === "admin"
                    ? "admin d-flex flex-row-reverse align-items-center"
                    : "others d-flex  align-items-center "
                }`}
              >
                <div
                  className={`${
                    msg.message.sender === "admin"
                      ? "admin-main-image"
                      : "others-main-image"
                  }`}
                >
                  <img
                    style={{ width: "100%", borderRadius: "5px" }}
                    src={msg.message.image}
                    alt="Pic"
                  />
                </div>
                <div className="dots_3">
                  <MoreHorizIcon
                    onClick={() => messageEdtBtn({ btn: "image", dt: msg })}
                  ></MoreHorizIcon>
                </div>
              </div>
            ) : msg.message.message !== "" ? (
              // for message
              <div
                key={index}
                className={`${
                  msg.message.sender === "admin"
                    ? "admin d-flex flex-row-reverse align-items-center"
                    : "others"
                }`}
              >
                <div
                  className={`${
                    msg.message.sender === "admin"
                      ? "admin-main"
                      : "others-main"
                  }`}
                >
                  <div>
                    <span>{msg.message.message}</span>
                  </div>
                </div>
                <div className="dots_3">
                  <MoreHorizIcon
                    onClick={() => messageEdtBtn({ btn: "message", dt: msg })}
                  ></MoreHorizIcon>
                </div>
              </div>
            ) : (
              // for product

              <div
                key={index}
                className={`${
                  msg.message.sender === "admin"
                    ? "admin d-flex flex-row-reverse align-items-center"
                    : "others"
                }`}
              >
                <div
                  className={`${
                    msg.message.sender === "admin"
                      ? "admin-main-image"
                      : "others-main-image"
                  }`}
                >
                  <img
                    src={
                      !msg.message.product.img[0][0][0] === "h"
                        ? msg.message.product.img[0][0][0]
                        : msg.message.product.img[0][0]
                    }
                    alt=""
                    style={{ width: "100%", borderRadius: "5px" }}
                  />

                  <div>
                    <span>
                      <b>{msg.message.product.props.ProductName}</b>
                    </span>
                  </div>
                  <div>
                    <span>
                      Category :{msg.message.product.props.ProductCategory}
                    </span>
                  </div>
                  <div className="pt-1 d-flex">
                    <div>
                      <span>
                        Price : <b>{msg.message.product.props.ProductPrice}</b>{" "}
                      </span>
                    </div>
                    <div className="px-2">
                      <span style={{ fontSize: "12px" }}>
                        Offer :{" "}
                        <s>
                          {" "}
                          <b>{msg.message.product.props.ProductOffer}</b>{" "}
                        </s>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dots_3">
                  <MoreHorizIcon
                    onClick={() => messageEdtBtn({ btn: "product", dt: msg })}
                  ></MoreHorizIcon>
                </div>
              </div>
            )
          )}

          {seen && (
            <div>
              <div class="d-flex justify-content-end px-2">
                {" "}
                <div
                  style={{
                    background: deepOrange[500],
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <span>{inboxRoom.charAt(0)}</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messageEndRef}></div>
        </div>
      )}
      {/* not important */}
      <div>
        {/* <input
          onChange={(e) => setSendMessage(e.target.value)}
          value={sendMessage}
          type="text"
        />
        <button
          onClick={() => {
            sendMessage !== "" && sendMessageBtn();
          }}
        >
          send
        </button> */}
      </div>

      <div className="d-flex  justify-content-between align-items-center">
        <div style={{ width: "40px" }}>
          {inputFile.createObjectURL !== "" ? (
            <div style={{ position: "relative" }}>
              <img
                style={{ width: "100%" }}
                src={inputFile.createObjectURL}
                alt={inputFile}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-10px",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                <CancelIcon
                  onClick={() =>
                    setInputFile({ createObjectURL: "", fullImgDetails: "" })
                  }
                ></CancelIcon>
              </div>
            </div>
          ) : (
            <InputFiles
              onChange={(files) => {
                console.log(files);
                setInputFile({
                  createObjectURL: URL.createObjectURL(files[0]),
                  fullImgDetails: files[0],
                });
              }}
            >
              <button
                style={{
                  backgroundColor: "white",
                  border: "1px solid #eaeaea",
                  padding: "8px",
                  borderRadius: "10px",
                }}
              >
                <ImageIcon style={{ color: "gray" }}></ImageIcon>
              </button>
            </InputFiles>
          )}
        </div>

        {inputFile.createObjectURL === "" ? (
          <InputEmoji
            value={sendMessage}
            onChange={setSendMessage}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
            height={30}
          />
        ) : (
          <span>Image Name : {inputFile.fullImgDetails.name}</span>
        )}
        <div style={{ width: "40px" }}>
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #eaeaea",
              padding: "8px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {inputFile.createObjectURL !== "" ? (
              imageLoading ? (
                <CircularProgress style={{ width: "20px", height: "20px" }} />
              ) : (
                <SendAndArchiveIcon onClick={() => sendImageInDataBase()}>
                  {" "}
                </SendAndArchiveIcon>
              )
            ) : (
              <SendIcon onClick={() => handleOnEnter()}> </SendIcon>
            )}
          </div>
        </div>
      </div>
    </InboxRoomBack>
  );
}

const InboxRoomBack = styled.div`
  .inbox_header {
    padding: 5px;
    background-color: #fff6cd;
    border-radius: 5px 5px 0px 0px;
  }
  .message-box {
    height: 380px;
    overflow-y: scroll;
    font-size: 14px;
  }

  /* width */
  .message-box::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .message-box::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #fec400;
    border-radius: 10px;
  }

  /* Handle */
  .message-box::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .message-box::-webkit-scrollbar-thumb:hover {
    background: #fec400;
  }

  .admin {
    //  background-color: #efefef;
    align-self: flex-end;
    width: 100%;
  }
  .admin:hover .dots_3 {
    display: block;
    cursor: pointer;
  }

  .others:hover .dots_3 {
    display: block;
    cursor: pointer;
  }
  .others {
    align-self: flex-end;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .admin-main {
    background-color: #efefef;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 5px 20px;
    margin: 3px 10px;
    display: flex;
  }
  .others-main {
    background-color: #6495ed;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 20px 5px;
    margin: 3px 10px;
    color: white;
  }

  .admin-main-image {
    width: 50%;
    background-color: #efefef;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 5px 20px;
    margin: 3px 10px;
  }
  .others-main-image {
    width: 50%;
    background-color: #6495ed;
    display: inline-block;
    padding: 10px;
    border-radius: 20px 20px 20px 5px;
    margin: 3px 10px;
  }
  .dots_3 {
    display: none;
  }
  .css-rob5aa-MuiPaper-root-MuiAlert-root {
    padding: 1px 91px;
  }
`;
