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
import EditProduct from "../EditProduct/EditProduct";
import Inbox from "../Inbox/Inbox";
import { FunctionBarSelectionContext } from "../MainDashboard/MainDashboard";
import Order from "../Order/Order";
import ProductLayout from "../ProductLayout/ProductLayout";
import Stock from "../Stock/Stock";
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

    socket.current = io(globeSocketIo);

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
    socket.current = io(globeSocketIo);
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
    socket.current = io(globeSocketIo);
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
    socket.current = io(globeSocketIo);
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
      {FunctionBarSelectionName === "Views" && (
        <ViewsDashboard></ViewsDashboard>
      )}
      {FunctionBarSelectionName === "Stock" && <Stock></Stock>}
      {FunctionBarSelectionName === "Inbox" && (
        <Inbox activeUserGlobal={activeUser}></Inbox>
      )}
    </div>
  );
}
