import { createContext, default as React, useState } from "react";
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
      <div>
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
            <div className="" style={{ width: "85%", overflow: "scroll" }}>
              <Functionbar></Functionbar>
            </div>
          </div>
        </div>
      </div>
    </FunctionBarSelectionContext.Provider>
  );
}
