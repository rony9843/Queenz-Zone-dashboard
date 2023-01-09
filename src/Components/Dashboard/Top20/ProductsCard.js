import React, { useEffect, useState } from "react";
import SingleProductCards from "./SingleProductCards";

export default function ProductsCard({ pdC, pd, fetchData, renNumber }) {
  const [SingleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    if (pd.ProductCategory === pdC) {
      const fetchCate = fetchData?.filter(
        (fData) => fData.cateTop20.cate === pdC
      );

      console.log("this is fetchFilter : ", fetchCate);

      const finalData = fetchCate[0]?.cateTop20.productsId.filter(
        (pId) => pId.id === pd._id
      );

      setSingleProduct(finalData === undefined ? [] : finalData);

      console.log("this is fetchFilter 88888 : ", finalData);
      console.log("this is fetchFilter 88888 renNumber : ", renNumber);
    }
  }, [renNumber]);

  return (
    <div>
      {pd.ProductCategory === pdC && (
        <div className="p-2">
          {!SingleProduct.length === false &&
            SingleProduct[0].id === pd._id && (
              <div style={{ width: "200px" }}>
                <SingleProductCards pd={pd}></SingleProductCards>
              </div>
            )}
        </div>
      )}
    </div>
  );
}
