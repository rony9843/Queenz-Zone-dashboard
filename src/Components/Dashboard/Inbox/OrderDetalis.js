import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Order from "./Order";

export default function OrderDetalis({ userOrder }) {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    setAllOrder(userOrder);
  }, [userOrder]);

  return (
    <OrderDetalisBack>
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
      <div className="order_section mt-2">
        {allOrder.map((order) => (
          <div>
            {" "}
            <Order order={order}></Order>
          </div>
        ))}
      </div>
    </OrderDetalisBack>
  );
}

const OrderDetalisBack = styled.div`
  .order_section {
    overflow-y: scroll;
    height: 417px;
  }
  .order_section::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .order_section::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #b3b3b3eb;
    border-radius: 10px;
  }

  /* Handle */
  .order_section::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .order_section::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;
