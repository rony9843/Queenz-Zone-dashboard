import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import ChatIcon from "@mui/icons-material/Chat";
import ClassIcon from "@mui/icons-material/Class";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Shop2Icon from "@mui/icons-material/Shop2";
import { default as React, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../../Asset/queenz_zone_logo.png";
import { FunctionBarSelectionContext } from "../MainDashboard/MainDashboard";

export default function Sidebar({ activeUserForSidebar }) {
  // use context for sidebar name
  const [FunctionBarSelectionName, setFunctionBarSelectionName] = useContext(
    FunctionBarSelectionContext
  );

  // useState for option select
  const [optionSelectState, setOptionSelectState] = useState("order");

  // option select
  const optionSelect = (props) => {
    setOptionSelectState(props);
    setFunctionBarSelectionName(props);
  };

  useEffect(() => {
    optionSelect("Inbox");
  }, []);

  return (
    <Sidebarback>
      <div>
        <div style={{ backgroundColor: "#FEC400", height: "100vh" }}>
          <div>
            <div
              class="d-flex justify-content-evenly "
              style={{ padding: "0px 20px", paddingTop: "10px" }}
            >
              <div>
                <img style={{ width: "68px" }} src={logo} alt="" />
              </div>
              <div>
                <div style={{ fontWeight: "700", fontSize: "20px" }}>
                  Dashboard
                </div>
                <div class="d-flex justify-content-center">
                  {" "}
                  <div style={{ fontSize: "20px" }}>Admin</div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <hr
                style={{
                  width: "144px",
                  height: "3px",
                  color: "#F4ECB6",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              onClick={() => optionSelect("order")}
              style={{
                padding: `${optionSelectState === "order" ? "4px" : "4px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  backgroundColor: ` ${
                    optionSelectState === "order"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,

                  cursor: "pointer",
                }}
              >
                <div>
                  <Shop2Icon></Shop2Icon>
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Order
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Add Product")}
              style={{
                padding: `${
                  optionSelectState === "Add Product" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  backgroundColor: ` ${
                    optionSelectState === "Add Product"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,

                  cursor: "pointer",
                }}
              >
                <div>
                  <AddShoppingCartIcon></AddShoppingCartIcon>
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Add Product
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Edit Product")}
              style={{
                padding: `${
                  optionSelectState === "Edit Product" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  backgroundColor: ` ${
                    optionSelectState === "Edit Product"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,

                  cursor: "pointer",
                }}
              >
                <div>
                  <ModeEditOutlineIcon></ModeEditOutlineIcon>
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Edit Product
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Product Layout")}
              style={{
                padding: `${
                  optionSelectState === "Product Layout" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  backgroundColor: ` ${
                    optionSelectState === "Product Layout"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,

                  cursor: "pointer",
                }}
              >
                <div>
                  <CategoryIcon></CategoryIcon>
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Product Layout
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Add Category")}
              style={{
                padding: `${
                  optionSelectState === "Add Category" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  backgroundColor: ` ${
                    optionSelectState === "Add Category"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,

                  cursor: "pointer",
                }}
              >
                <div>
                  <ClassIcon></ClassIcon>
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Category
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Inbox")}
              style={{
                padding: `${optionSelectState === "Inbox" ? "4px" : "4px"}`,
              }}
            >
              <div
                className="d-flex justify-content-between a"
                style={{
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "Inbox"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div class="d-flex justify-content-start p-2 ">
                  <div>
                    <ChatIcon></ChatIcon>
                  </div>
                  <div className="fw-bold" style={{ marginLeft: "10px" }}>
                    Inbox
                  </div>
                </div>
                {activeUserForSidebar && activeUserForSidebar.length > 0 && (
                  <div className="p-2 d-flex align-items-center">
                    <div className="userOnlineEye">
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                    <div>
                      <span className="mx-1">
                        {activeUserForSidebar && activeUserForSidebar.length}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Stock")}
              style={{
                padding: `${optionSelectState === "Stock" ? "4px" : "4px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "Stock"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Stock
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Views")}
              style={{
                padding: `${optionSelectState === "Views" ? "4px" : "4px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "Views"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <RemoveRedEyeIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Views
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("ordfder")}
              style={{
                padding: `${optionSelectState === "ordfder" ? "4px" : "8px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Order
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("orrtyryder")}
              style={{
                padding: `${
                  optionSelectState === "orrtyryder" ? "4px" : "8px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Order
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("ordasdder")}
              style={{
                padding: `${optionSelectState === "ordasdder" ? "4px" : "8px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebarback>
  );
}

const Sidebarback = styled.div`
  user-select: none;

  .userOnlineEye {
    animation: myfirst 1s linear 0.5s infinite alternate;
  }

  @keyframes myfirst {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.3;
    }

    100% {
      opacity: 1;
    }
  }
`;
