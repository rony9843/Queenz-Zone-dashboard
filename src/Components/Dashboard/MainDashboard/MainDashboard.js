import { createContext, default as React, useState } from "react";
import styled from "styled-components";
import Functionbar from "../Functionbar/Functionbar";
import Sidebar from "../Sidebar/Sidebar";

// functionBarSelection create context
export const FunctionBarSelectionContext = createContext();

export default function MainDashboard() {
  const [FunctionBarSelectionName, setFunctionBarSelectionName] =
    useState("order");

  // ^ active user state for sidebar
  const [activeUserForSidebar, setActiveUserForSideBar] = useState([]);

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
            <div className="SidebarStyle" style={{}}>
              <Sidebar activeUserForSidebar={activeUserForSidebar}></Sidebar>
            </div>
            <div className="FunctionbarStyle">
              <Functionbar
                setActiveUserForSideBar={setActiveUserForSideBar}
              ></Functionbar>
            </div>
          </div>
        </div>
      </FunctionBarBack>
    </FunctionBarSelectionContext.Provider>
  );
}

const FunctionBarBack = styled.div`
  .SidebarStyle {
    width: 15%;
  }

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

  @media screen and (max-width: 1000px) {
    .SidebarStyle {
      display: none;
    }
    .FunctionbarStyle {
      width: 100%;
    }
  }
`;
