import { createContext, default as React, useState } from "react";
import styled from "styled-components";
import Functionbar from "../Functionbar/Functionbar";
import Sidebar from "../Sidebar/Sidebar";

// functionBarSelection create context
export const FunctionBarSelectionContext = createContext();

export default function MainDashboard() {
  const [FunctionBarSelectionName, setFunctionBarSelectionName] =
    useState("order");

  return (
    <FunctionBarSelectionContext.Provider
      value={[FunctionBarSelectionName, setFunctionBarSelectionName]}
    >
      <FunctionBarBack>
        <div style={{ padding: "0px", margin: "0px", fontFamily: "Poppins" }}>
          <div
            class="d-flex justify-content-between"
            style={{ height: "100vh" }}
          >
            {" "}
            <div
              className=""
              style={{
                width: "15%",
                overflow: "scroll",
              }}
            >
              <Sidebar></Sidebar>
            </div>
            <div className="FunctionbarStyle">
              <Functionbar></Functionbar>
            </div>
          </div>
        </div>
      </FunctionBarBack>
    </FunctionBarSelectionContext.Provider>
  );
}

const FunctionBarBack = styled.div`
  .FunctionbarStyle {
    overflow-y: scroll;
    width: 85%;
  }
  .FunctionbarStyle::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .FunctionbarStyle::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #b3b3b3eb;
    border-radius: 10px;
  }

  /* Handle */
  .FunctionbarStyle::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .FunctionbarStyle::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;
