import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import BrushIcon from "@mui/icons-material/Brush";
import CampaignIcon from "@mui/icons-material/Campaign";
import CategoryIcon from "@mui/icons-material/Category";
import ChatIcon from "@mui/icons-material/Chat";
import ClassIcon from "@mui/icons-material/Class";
import CollectionsIcon from "@mui/icons-material/Collections";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import PanoramaPhotosphereSelectIcon from "@mui/icons-material/PanoramaPhotosphereSelect";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SettingsIcon from "@mui/icons-material/Settings";
import Shop2Icon from "@mui/icons-material/Shop2";
import SourceIcon from "@mui/icons-material/Source";
import ThreeMpIcon from "@mui/icons-material/ThreeMp";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { default as React, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../../Asset/queenz_zone_logo.png";
import { FunctionBarSelectionContext } from "../MainDashboard/MainDashboard";
import GraphicDesignOption from "./GraphicDesignOption";

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
        <div
          className="sidebarMainDiv"
          style={{
            backgroundColor: "#FEC400",
            height: "94vh",
          }}
        >
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
              onClick={() => optionSelect("Users")}
              style={{
                padding: `${optionSelectState === "Users" ? "4px" : "4px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "Users"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <PeopleAltIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Users
                </div>
              </div>
            </div>
            <GraphicDesignOption
              optionSelectState={optionSelectState}
              BrushIcon={BrushIcon}
              optionSelect={optionSelect}
            ></GraphicDesignOption>
            <div
              className=""
              onClick={() => optionSelect("Resource")}
              style={{
                padding: `${optionSelectState === "Resource" ? "4px" : "4px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "Resource"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <SourceIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Resource
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Components")}
              style={{
                padding: `${
                  optionSelectState === "Components" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "Components"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <SourceIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Components
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Carousel")}
              style={{
                padding: `${optionSelectState === "Carousel" ? "4px" : "4px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "Carousel"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <ViewCarouselIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Carousel
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("ProductPoster")}
              style={{
                padding: `${
                  optionSelectState === "ProductPoster" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "ProductPoster"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <DynamicFeedIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Product's Poster
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("StaticBanner")}
              style={{
                padding: `${
                  optionSelectState === "StaticBanner" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "StaticBanner"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <AdUnitsIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Static Banner
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("SwipeableCarousel")}
              style={{
                padding: `${
                  optionSelectState === "SwipeableCarousel" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "SwipeableCarousel"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <RecentActorsIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Swipeable Carousel
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("specialOffer")}
              style={{
                padding: `${
                  optionSelectState === "specialOffer" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "specialOffer"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <AppShortcutIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Special Offer
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("ProductGallery")}
              style={{
                padding: `${
                  optionSelectState === "ProductGallery" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "ProductGallery"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <CollectionsIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Product Gallery
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("GroupProduct")}
              style={{
                padding: `${
                  optionSelectState === "GroupProduct" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "GroupProduct"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <Diversity2Icon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Group Product
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("MegaDeal")}
              style={{
                padding: `${optionSelectState === "MegaDeal" ? "4px" : "4px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "MegaDeal"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <CampaignIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Mega Deal
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("GroupPoster")}
              style={{
                padding: `${
                  optionSelectState === "GroupPoster" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "GroupPoster"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <ArtTrackIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Group Poster
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("StackedCenterCarousel")}
              style={{
                padding: `${
                  optionSelectState === "StackedCenterCarousel" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "StackedCenterCarousel"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <ViewStreamIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Stacked Carousel
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("ThreePosters")}
              style={{
                padding: `${
                  optionSelectState === "ThreePosters" ? "4px" : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "ThreePosters"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <ThreeMpIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Three Posters
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("CoverflowEffectCarousel")}
              style={{
                padding: `${
                  optionSelectState === "CoverflowEffectCarousel"
                    ? "4px"
                    : "4px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "CoverflowEffectCarousel"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <PanoramaPhotosphereSelectIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Coverflow Carousel
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("settings")}
              style={{
                padding: `${optionSelectState === "settings" ? "4px" : "4px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "settings"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <SettingsIcon />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Setting
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
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#FEC400",
            boxShadow: "rgb(87 87 87 / 30%) -5px -17px 20px 0px",
          }}
        >
          {/* <div className=" d-flex justify-content-center pt-2">
            <div>
              <Button
                style={{
                  padding: "1px 30px",
                }}
                variant="outlined"
                color="error"
              >
                Log Out
              </Button>
            </div>
          </div> */}
          <div
            className="d-flex pt-1"
            style={{ paddingLeft: "10px" }}
            onClick={() => optionSelect("profile")}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjMxMTYwMnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=420&q=60"
                alt=""
                srcset=""
                style={{ width: "20px", borderRadius: "5px" }}
              />
            </div>
            <div style={{ paddingLeft: "5px" }}>
              <div
                style={{ fontWeight: "bold", padding: "0px", margin: "0px" }}
              >
                <span>Jubayth H Roni</span>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#21252999",
                  padding: "0px",
                  margin: "0px",
                  marginTop: "-6px",
                }}
              >
                <span>rony13647@gmail.com</span>
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
  background-color: #fec400;

  .sidebarMainDiv {
    background-color: #fec400;
  }

  .sidebarMainDiv {
    overflow-y: scroll;
  }

  /* width */
  .sidebarMainDiv::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  .sidebarMainDiv::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
  }

  /* Handle */
  .sidebarMainDiv::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .sidebarMainDiv::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

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
