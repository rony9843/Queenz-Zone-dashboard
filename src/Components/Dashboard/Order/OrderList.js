import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { default as MuiAlert } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import "./Order.css";

// English.
import en from "javascript-time-ago/locale/en";
const now = new Date();

TimeAgo.addDefaultLocale(en);

export default function OrderList({
  or,
  setReload,
  orderdetailsOption,
  setOrderDetailsOption,
  setCallUseEffect,
}) {
  //console.log("this is single order page : ", or);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const timeAgo = new TimeAgo("en-US");

  let userCarentTime = or.UserCurrentDateAndTime;

  const [editDate, setEditDate] = useState([userCarentTime]);
  const [editTime, setEditTime] = useState([userCarentTime]);

  //console.log(or);

  // if (!or.length === true) {
  //   userCarentTime = userCarentTime.split("T");
  //   console.log("this is edit time : ", userCarentTime);
  // }

  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    setTimeout(function () {
      setEditDate(editDate[0].split("T"));
      setEditTime(editTime[0].split("T"));
    }, 2000);
  }, []);

  // order status change
  const [orderStatusChange, setOrderStatusChange] = useState(or.orderStatus);

  const [OrderStatusAllValue, setOrderStatusAllValue] = useState([
    "Pending",
    "On The Way",
    "Complete",
  ]);

  const [orderDeleteInput, setOrderDeleteInput] = useState("");

  const [error, setError] = useState({
    state: false,
  });

  return (
    <div className="mb-4">
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Deleted
          </Alert>
        </Snackbar>
      </Stack>

      <div>
        <div
          className="m-1 p-2 hoverEffect"
          style={{
            border: `2px solid ${
              or.orderStatus === "On The Way"
                ? "rgb(51, 0, 207)"
                : or.orderStatus === "Complete"
                ? "green"
                : "#fec400"
            }`,
            borderRadius: "5px ",
          }}
        >
          {/* <div class="d-flex justify-content-between">
            <div>
              <span>
                Order Number : <b>#38937429385</b>
              </span>
            </div>
            <div>
              <span>
                Sub Total : <b>385 SAR</b>
              </span>
            </div>
            <div>
              <span>
                Delivery Date : <b>2022-04-17</b>
              </span>
            </div>
            <div>
              <span>
                Delivery Time : <b>3:30 PM</b>
              </span>
            </div>
            <div>
              <span>
                Status :{" "}
                <span
                  className="p-1"
                  style={{
                    color: "white",
                    backgroundColor: "hwb(46deg 0% 0%)",
                    borderRadius: "5px",
                  }}
                >
                  <b>Panding</b>
                </span>
              </span>
            </div>
          </div> */}
          <div>
            <div className="row ">
              <div className="col">
                <div>
                  <span>Order Number :</span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>Sub Total :</span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>Product List : </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>Delivery Date :</span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>Delivery Time :</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>
                    Status :{" "}
                    <span
                      className="p-1"
                      // style={{
                      //   color: "white",
                      //   backgroundColor: "hwb(46deg 0% 0%)",
                      //   borderRadius: "5px",
                      // }}
                    ></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row ">
              <div className="col">
                <div>
                  <span style={{ fontSize: "12px" }}>
                    <b>{or._id}</b>
                  </span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserSelectproduct.SubTotal}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserSelectproduct.selectedProduct.length}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{editDate[0]}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserExpectedDeliveryTime}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                <div
                  style={{
                    backgroundColor: ` ${
                      or.orderStatus === "On The Way"
                        ? "rgb(51, 0, 207)"
                        : or.orderStatus === "Complete"
                        ? "green"
                        : "#fec400"
                    }`,
                    padding: "3px",
                    fontSize: "13px",
                    textAlign: "center",
                    color: "white",
                    fontWeight: "700",
                    borderRadius: "5px",
                  }}
                >
                  {or.orderStatus}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="row ">
              <div className="col">
                <div>
                  <span>Name :</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>Email :</span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>Phone Number 1 :</span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>Phone Number 2 :</span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>Address :</span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>User House Number :</span>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col">
                <div>
                  <span>
                    <b>{or.UserName}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>
                    <b>{or.UserEmail}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserPhoneNumber_1}</b>
                  </span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserPhoneNumber_2}</b>
                  </span>
                </div>
              </div>

              <div className="col">
                {" "}
                <div>
                  <span>
                    <b>{or.UserAddress ? or.UserAddress : "null"}</b>
                  </span>
                </div>
              </div>
              <div className="col">
                <div>
                  <span>
                    <b>{or.UserHouseNumber}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="p-2"
              style={{
                marginTop: "10px",
                border: "2px solid red",
                borderRadius: "5px ",
              }}
            >
              <div>
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    User Secret Info{" "}
                    <span style={{ fontSize: "10px", color: "gray" }}>
                      ( sometimes this information not correct )
                    </span>
                  </span>
                </div>
                <div
                  style={{
                    height: "2px",

                    width: "387px",
                    backgroundColor: "#ff0c0c6b",
                  }}
                ></div>
                <div>
                  <div className="row">
                    <div className="col">User IP</div>
                    <div className="col">Country Code</div>
                    <div className="col">City</div>
                    <div className="col">Latitude</div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ fontSize: "13px" }}>
                      {or.UserIp ? or.UserIp.ip : "null"}
                    </div>
                    <div className="col">{or.UserIp && or.UserIp.country}</div>
                    <div className="col">{or.UserIp && or.UserIp.region}</div>
                    <div className="col" style={{ color: "red" }}>
                      {or.UserIp ? or.UserIp.latitude : "null"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">User IP Version</div>
                    <div className="col">User Current Date</div>
                    <div className="col">User Current Time</div>

                    <div className="col">Longitude</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      {or.UserIp ? or.UserIp.version : "null"}
                    </div>
                    <div className="col">{editDate[0]}</div>
                    <div className="col">
                      {new Date(or.UserCurrentDateAndTime).getHours() +
                        ":" +
                        new Date(or.UserCurrentDateAndTime).getMinutes() +
                        ":" +
                        new Date(or.UserCurrentDateAndTime).getSeconds()}
                      {`  (${timeAgo.format(
                        new Date(or.UserCurrentDateAndTime)
                      )})`}
                    </div>

                    <div className="col" style={{ color: "red" }}>
                      {or.UserIp ? or.UserIp.longitude : "null"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="p-2"
              style={{
                marginTop: "10px",
                border: "2px solid #fec400",
                borderRadius: "5px ",
              }}
            >
              <div>
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Order Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        {or.UserSelectproduct.selectedProduct.map((pd) => (
                          <div className=" p-1 row">
                            <div className="col-2">
                              <img
                                style={{ width: "100%", borderRadius: "5px" }}
                                src={pd[1][0]}
                                alt=""
                              />
                            </div>
                            <div className="col-10">
                              <div className="row">
                                <div className="col-2">
                                  <b>Product Name</b>
                                </div>
                                {pd[0].isSizeShow && (
                                  <div className="col-2">
                                    <b>Product's Size</b>
                                  </div>
                                )}{" "}
                                <div className="col-2">
                                  <b>Product Category</b>
                                </div>
                                <div className="col-2">
                                  <b>Product Price</b>
                                </div>
                                <div className="col-2">
                                  <b>Product Offer</b>
                                </div>
                                <div className="col-1">
                                  <b>Qty</b>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-2">{pd[0].ProductName}</div>
                                {pd[0].isSizeShow && (
                                  <div className="col-2">{pd[0].pSize}</div>
                                )}
                                <div className="col-2">
                                  {pd[0].ProductCategory}
                                </div>
                                <div className="col-2">
                                  {pd[0].ProductPrice}
                                </div>
                                <div className="col-2">
                                  {pd[0].ProductOffer}
                                </div>
                                <div className="col-1">
                                  {pd[0].qty ? pd[0].qty : 1}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    style={{ backgroundColor: "#ffde4d" }}
                    className="mt-2"
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>State Change</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <div className="row">
                          <div className="col-6">
                            <div
                              class="px-4 d-flex "
                              style={{ alignItems: "center" }}
                            >
                              <div>
                                <span style={{ fontSize: "18px" }}>
                                  <b> State :</b>{" "}
                                </span>
                              </div>
                              <div className="px-3">
                                <select
                                  style={{
                                    fontSize: "15px",
                                    border: "none",
                                    backgroundColor: "#fec400",
                                  }}
                                  onChange={(e) =>
                                    setOrderStatusChange(e.target.value)
                                  }
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  {OrderStatusAllValue.map((st) =>
                                    st === orderStatusChange ? (
                                      <option selected value={st}>
                                        {st}
                                      </option>
                                    ) : (
                                      <option value={st}>{st}</option>
                                    )
                                  )}
                                </select>
                              </div>
                              <div>
                                <Button
                                  style={{
                                    backgroundColor: "#fec400",
                                    color: "black",
                                  }}
                                  variant="contained"
                                  onClick={() =>
                                    fetch(
                                      "https://queenzzoneserver-production.up.railway.app/queenZoneEditedOrderStatus",
                                      {
                                        method: "POST", // or 'PUT'
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          orderId: or._id,
                                          orderStatus: orderStatusChange,
                                        }),
                                      }
                                    )
                                      .then((response) => response.json())
                                      .then((data) => {
                                        setReload(true);
                                        setCallUseEffect(true);
                                        console.log("Success:", data);
                                      })
                                      .catch((error) => {
                                        console.error("Error:", error);
                                      })
                                  }
                                >
                                  Change
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="col-1">
                            <div style={{ height: "42px" }} class="vr"></div>
                          </div>

                          <div className="col-5">
                            <div>
                              <input
                                onChange={(e) =>
                                  setOrderDeleteInput(e.target.value)
                                }
                                value={orderDeleteInput}
                                style={{
                                  fontSize: "15px",
                                  backgroundColor: "#fec400",
                                  border: "1px solid red",
                                  color: "red",
                                }}
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Order Number..."
                              />
                            </div>
                            <div
                              class="d-flex justify-content-between mt-1"
                              style={{ alignItems: "center" }}
                            >
                              <div>
                                <span onClick={() => handleClick()}>
                                  <b style={{ color: "red" }}>
                                    Cancel The Order
                                  </b>
                                </span>
                              </div>
                              <div>
                                <Button
                                  onClick={() =>
                                    orderDeleteInput !== "" &&
                                    orderDeleteInput === or._id
                                      ? fetch(
                                          "https://queenzzoneserver-production.up.railway.app/queenZoneDeleteOrder",
                                          {
                                            method: "POST", // or 'PUT'
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              orderId: or._id,
                                            }),
                                          }
                                        )
                                          .then((response) => response.json())
                                          .then((data) => {
                                            handleClick();
                                            console.log("Success:", data);
                                          })
                                          .catch((error) => {
                                            console.error("Error:", error);
                                          })
                                      : setError({ state: true })
                                  }
                                  className="px-5"
                                  variant="contained"
                                  color="error"
                                >
                                  Cancel Order
                                </Button>
                              </div>
                            </div>
                            {error.state && (
                              <div className="mt-3">
                                <Alert severity="warning">
                                  Please, Enter valid <b>Order Number</b>
                                </Alert>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
