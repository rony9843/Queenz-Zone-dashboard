import TimeAgo from "javascript-time-ago";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";

// English.
import en from "javascript-time-ago/locale/en";
const now = new Date();

TimeAgo.addDefaultLocale(en);

export default function Order({ order }) {
  const timeAgo = new TimeAgo("en-US");
  // ^ order image
  const [image, setImage] = useState(
    order.UserSelectproduct.selectedProduct[0][1][0]
  );

  console.log("this is product props : ", order);

  return (
    <OrderPageBack>
      <div className="d-flex mt-2 ">
        <div className="col-3">
          <div>
            <img
              style={{ borderRadius: "10px" }}
              src={image}
              class="img-fluid"
              alt="this is order"
            />
          </div>
        </div>
        <div className="col-9">
          <div className="d-flex">
            <div className="col-6 px-2">
              <div style={{ fontSize: "12px" }}>
                <div>UserCurrentDateAndTime:</div>{" "}
                <div>
                  {new Date(order.UserCurrentDateAndTime).getDate() +
                    "/" +
                    new Date(order.UserCurrentDateAndTime).getMonth() +
                    "/" +
                    new Date(order.UserCurrentDateAndTime).getFullYear()}{" "}
                  --
                  {new Date(order.UserCurrentDateAndTime).getHours() +
                    ":" +
                    new Date(order.UserCurrentDateAndTime).getMinutes() +
                    ":" +
                    new Date(order.UserCurrentDateAndTime).getSeconds()}
                  {`  (${timeAgo.format(
                    new Date(order.UserCurrentDateAndTime)
                  )})`}
                </div>
                <div>DeliveryDateAndTime:</div>{" "}
                <div>
                  {new Date(order.UserExpectedDeliveryDate).getDate() +
                    "/" +
                    new Date(order.UserExpectedDeliveryDate).getMonth() +
                    "/" +
                    new Date(order.UserExpectedDeliveryDate).getFullYear()}{" "}
                  --- {order.UserExpectedDeliveryTime}
                </div>
                <div>
                  {" "}
                  <span>
                    Total : <b>{order.UserSelectproduct.SubTotal} SAR </b>{" "}
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <div>
                {" "}
                <span
                  className={`p-2 ${
                    order.orderStatus === "Pending"
                      ? "pendingOrder"
                      : order.orderStatus === "On The Way"
                      ? "OrderOnTheWay"
                      : "OrderCom"
                  }`}
                  style={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {order.orderStatus}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderPageBack>
  );
}

const OrderPageBack = styled.div`
  .pendingOrder {
    background-color: #fec400;
    border-radius: 5px;
    cursor: pointer;
  }
  .OrderOnTheWay {
    background-color: #3300cf;
    border-radius: 5px;
    cursor: pointer;
  }
  .OrderCom {
    background-color: #008000;
    border-radius: 5px;
    cursor: pointer;
  }
`;
