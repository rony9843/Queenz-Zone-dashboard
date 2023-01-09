import {
  default as React,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import io from "socket.io-client";
import globeSocketIo from "../../../globeVar ";
import AddCategory from "../AddCategory/AddCategory";
import AllAboutProduct from "../AddProduct/AllAboutProduct";
import CarouselSection from "../CarouselSection/CarouselSection";

import Components from "../Components/Components";
import CoverflowEffectCarousel from "../CoverflowEffectCarousel/CoverflowEffectCarousel";
import CreatePage from "../CreatePage/CreatePage";
import EditProduct from "../EditProduct/EditProduct";
import GraphicDesign from "../GraphicDesign/GraphicDesign";
import GroupPoster from "../GroupPoster/GroupPoster";
import HomePageLayout from "../HomePageLayout/HomePageLayout";
import Inbox from "../Inbox/Inbox";
import { FunctionBarSelectionContext } from "../MainDashboard/MainDashboard";
import MegaDeal from "../MegaDeal/MegaDeal";
import Order from "../Order/Order";
import ProductCards from "../ProductCards/ProductCards";
import ProductGallery from "../ProductGallery/ProductGallery";
import ProductLayout from "../ProductLayout/ProductLayout";
import ProductPoster from "../ProductPoster/ProductPoster";
import Profile from "../Profile/Profile";
import Resource from "../Resource/Resource";
import Settings from "../Settings/Settings";
import StackedCenterCarousel from "../StackedCenterCarousel/StackedCenterCarousel";
import StaticBanner from "../StaticBanner/StaticBanner";
import Stock from "../Stock/Stock";
import SwipeableCarouselComponents from "../SwipeableCarouselComponents/SwipeableCarouselComponents";
import ThreePosters from "../ThreePosters/ThreePosters";
import Top20 from "../Top20/Top20";
import Users from "../Users/Users";
import ViewsDashboard from "../ViewsDashboard/ViewsDashboard";

export default function Functionbar({ setActiveUserForSideBar }) {
  // use context for sidebar name
  const [FunctionBarSelectionName, setFunctionBarSelectionName] = useContext(
    FunctionBarSelectionContext
  );

  // active user online offline
  const [activeUser, setActiveUser] = useState([]);

  const [updateCount, setUpdateCount] = useState(1);

  useEffect(() => {
    setTimeout(function () {
      setUpdateCount(updateCount + 1);
      console.log("this is all online user : ", activeUser);
    }, 3000);
  }, [updateCount]);

  // ^ start
  const socket = useRef();

  useEffect(() => {
    // get data
    // socket.current.emit("user-connected", (user) => {});

    socket.current = io(globeSocketIo, {
      transports: ["websocket", "polling"], // use WebSocket first, if available
    });

    // get data
    socket.current.on("get-user-connected", (user) => {
      setActiveUser(user);
      setActiveUserForSideBar(user);

      console.log("this is all online user 1 : ", user);

      // update active user at setTimeOut
    });
  }, [socket]);

  useEffect(() => {
    // get data
    socket.current = io(globeSocketIo, {
      transports: ["websocket", "polling"], // use WebSocket first, if available
    });
    // get data
    socket.current.on("get-online-user-disconnect", (user) => {
      setActiveUser(user);
      console.log("this is all online user 2 : ", user);
      setActiveUserForSideBar(user);

      // update active user at setTimeOut
    });
  }, [socket]);

  //call
  useEffect(() => {
    socket.current = io(globeSocketIo, {
      transports: ["websocket", "polling"], // use WebSocket first, if available
    });
    // get data
    socket.current.on("get-online-user", (user) => {
      setActiveUser(user);
      setActiveUserForSideBar(user);
      console.log("this is all online user 3 : ", user);

      // update active user at setTimeOut
    });
  }, [socket, updateCount]);

  //call
  useEffect(() => {
    socket.current = io(globeSocketIo, {
      transports: ["websocket", "polling"], // use WebSocket first, if available
    });
    // get data
    socket.current.emit("user-connected", "hiiiiiiii");

    socket.current.on("get-user-connected", (user) => {
      setActiveUser(user);
      setActiveUserForSideBar(user);
      console.log("this is all online user 3 : ", user);

      // update active user at setTimeOut
    });
  }, [socket]);

  return (
    <div>
      {FunctionBarSelectionName === "Add Product" && (
        <AllAboutProduct></AllAboutProduct>
      )}
      {FunctionBarSelectionName === "Add Category" && (
        <AddCategory></AddCategory>
      )}
      {FunctionBarSelectionName === "order" && <Order></Order>}
      {FunctionBarSelectionName === "Edit Product" && (
        <EditProduct></EditProduct>
      )}
      {FunctionBarSelectionName === "Product Layout" && (
        <ProductLayout></ProductLayout>
      )}
      {FunctionBarSelectionName === "HomePageLayout" && (
        <HomePageLayout></HomePageLayout>
      )}
      {FunctionBarSelectionName === "Views" && (
        <ViewsDashboard></ViewsDashboard>
      )}
      {FunctionBarSelectionName === "Stock" && <Stock></Stock>}
      {FunctionBarSelectionName === "Inbox" && (
        <Inbox activeUserGlobal={activeUser}></Inbox>
      )}
      {FunctionBarSelectionName === "Resource" && <Resource></Resource>}
      {FunctionBarSelectionName === "Carousel" && (
        <CarouselSection></CarouselSection>
      )}
      {FunctionBarSelectionName === "Components" && <Components></Components>}
      {FunctionBarSelectionName === "GraphicDesign" && (
        <GraphicDesign></GraphicDesign>
      )}
      {FunctionBarSelectionName === "ProductPoster" && (
        <ProductPoster></ProductPoster>
      )}
      {FunctionBarSelectionName === "StaticBanner" && (
        <StaticBanner></StaticBanner>
      )}
      {FunctionBarSelectionName === "SwipeableCarousel" && (
        <SwipeableCarouselComponents></SwipeableCarouselComponents>
      )}
      {FunctionBarSelectionName === "specialOffer" && (
        <StaticBanner></StaticBanner>
      )}
      {FunctionBarSelectionName === "ProductGallery" && (
        <ProductGallery></ProductGallery>
      )}
      {FunctionBarSelectionName === "GroupProduct" && (
        <StaticBanner></StaticBanner>
      )}
      {FunctionBarSelectionName === "GroupPoster" && (
        <GroupPoster></GroupPoster>
      )}
      {FunctionBarSelectionName === "MegaDeal" && <MegaDeal></MegaDeal>}

      {FunctionBarSelectionName === "StackedCenterCarousel" && (
        <StackedCenterCarousel></StackedCenterCarousel>
      )}

      {FunctionBarSelectionName === "ThreePosters" && (
        <ThreePosters></ThreePosters>
      )}
      {FunctionBarSelectionName === "CoverflowEffectCarousel" && (
        <CoverflowEffectCarousel></CoverflowEffectCarousel>
      )}
      {FunctionBarSelectionName === "Top20" && <Top20></Top20>}
      {FunctionBarSelectionName === "ProductCards" && (
        <ProductCards></ProductCards>
      )}
      {FunctionBarSelectionName === "CreatePage" && <CreatePage></CreatePage>}
      {FunctionBarSelectionName === "settings" && <Settings></Settings>}
      {FunctionBarSelectionName === "profile" && <Profile></Profile>}
      {FunctionBarSelectionName === "Users" && <Users></Users>}
    </div>
  );
}
