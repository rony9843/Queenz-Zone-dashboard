import React from "react";
import styled from "styled-components";

export default function OrderDetalis() {
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
    </OrderDetalisBack>
  );
}

const OrderDetalisBack = styled.div``;
