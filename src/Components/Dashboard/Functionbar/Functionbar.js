import { default as React, useContext } from "react";
import AddCategory from "../AddCategory/AddCategory";
import AllAboutProduct from "../AddProduct/AllAboutProduct";
import EditProduct from "../EditProduct/EditProduct";
import Inbox from "../Inbox/Inbox";
import { FunctionBarSelectionContext } from "../MainDashboard/MainDashboard";
import Order from "../Order/Order";
import Stock from "../Stock/Stock";
import ViewsDashboard from "../ViewsDashboard/ViewsDashboard";

export default function Functionbar() {
  // use context for sidebar name
  const [FunctionBarSelectionName, setFunctionBarSelectionName] = useContext(
    FunctionBarSelectionContext
  );
  // const [imageNumbr, setImageNumber] = useState([]);

  // const addImage = (props) => {
  //   console.log("dkj");
  //   setImageNumber([...imageNumbr, props]);
  // };

  // const seeeeee = () => {
  //   console.log("this is :::::        ", imageNumbr);
  // };

  return (
    <div>
      {/* <button onClick={() => addImage("1")}>Add</button>
      <button onClick={() => seeeeee()}>seeeeeee</button>
      {imageNumbr.map((dt) => (
        <h2>hiiiiii</h2>
      ))} */}
      {/* <AddProduct></AddProduct> */}
      {/* <AddProductReDesign></AddProductReDesign> */}
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
      {FunctionBarSelectionName === "Views" && (
        <ViewsDashboard></ViewsDashboard>
      )}
      {FunctionBarSelectionName === "Stock" && <Stock></Stock>}
      {FunctionBarSelectionName === "Inbox" && <Inbox></Inbox>}
    </div>
  );
}
