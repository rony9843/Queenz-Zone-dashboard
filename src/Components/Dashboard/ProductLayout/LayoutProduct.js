import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

export default function LayoutProduct({
  layout,
  allProducts,
  selectedProduct,
}) {
  // state for product
  const [FilterProduct, setFilterProduct] = useState([]);

  // find this category products

  useEffect(() => {
    const thiscategoryProducts = allProducts.filter(
      (p) => p.ProductCategory === layout
    );
    setFilterProduct(thiscategoryProducts);
  }, [allProducts]);

  return (
    <LayoutProductback>
      {layout && (
        <div className="Layout_main_div">
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <span>Category : </span>
                <span>
                  <b>{layout}</b>{" "}
                </span>
              </div>
              <div>
                <span>
                  Length : <b>3</b>
                </span>
              </div>
            </div>
            <div className="d-flex productMain">
              {FilterProduct.map((p) => (
                <div>
                  {" "}
                  <Product selectedProduct={selectedProduct} p={p}></Product>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </LayoutProductback>
  );
}

const LayoutProductback = styled.div`
  .Layout_main_div {
    border: 2px solid #fec400;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
  }
  .productMain {
    overflow-x: scroll;
    padding: 10px;
  }

  .productMain::-webkit-scrollbar {
    width: 10px;
    height: 5px;
    cursor: pointer;
  }

  /* Track */
  .productMain::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
    cursor: pointer;
  }

  /* Handle */
  .productMain::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
    cursor: pointer;
  }

  /* Handle on hover */
  .productMain::-webkit-scrollbar-thumb:hover {
    background: #b30000;
    cursor: pointer;
  }
`;
