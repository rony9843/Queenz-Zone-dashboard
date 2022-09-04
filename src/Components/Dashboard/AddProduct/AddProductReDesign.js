import { createContext, default as React, useContext, useState } from "react";
import AddAnotherColorBtn from "./AddAnotherColorBtn";
import AddLink from "./AddLink";
import { AlllllProductInfoContext } from "./AllAboutProduct";

// product info create context
export const ProductInfoContext = createContext();

export default function AddProductReDesign({ demo, AllProInfo }) {
  const [AlOverProductInfoContext, setAlOverProductInfoContext] = useContext(
    AlllllProductInfoContext
  );

  const [AllProductInfo, setAllProductInfo] = useState({});

  const [AllInfo, setAllInfo] = useState([]);

  const alllll = [];

  const arrayPlus = (props) => {
    setAlOverProductInfoContext(props);

    //  setAllInfo([...AllInfo, AlOverProductInfoContext]);
  };

  const [enableColor, setEnableColor] = useState(true);

  arrayPlus(AllProductInfo);

  const [addSingleProduct, setAddSingleProduc] = useState(["1"]);

  const addProduct = (props) => {
    console.log("this is add color : ", props);

    setAddSingleProduc([...addSingleProduct, props]);
  };

  return (
    <ProductInfoContext.Provider value={[AllProductInfo, setAllProductInfo]}>
      <div>
        <div>
          <div>
            <div>
              {addSingleProduct.map((product) => (
                <div className="pt-2" style={{}}>
                  <AddLink
                    product={product}
                    setEnableColor={setEnableColor}
                    enableColor={enableColor}
                    demo={demo}
                  ></AddLink>
                </div>
              ))}
            </div>

            {enableColor === false && (
              <AddAnotherColorBtn
                AllProInfo={AllProInfo}
                addProduct={addProduct}
                addSingleProduct={addSingleProduct}
              ></AddAnotherColorBtn>
            )}
          </div>
        </div>
      </div>
    </ProductInfoContext.Provider>
  );
}
