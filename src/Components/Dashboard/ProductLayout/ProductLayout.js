import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import LayoutProduct from "./LayoutProduct";

export default function ProductLayout() {
  // state for all layout
  const [allLayout, setAllLayout] = useState([]);

  // ^ fetch all category
  useEffect(() => {
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneCategoryRead")
      .then((response) => response.json())
      .then((json) => {
        setAllLayout(json);
      });
  }, []);
  // state for all layout
  const [allProducts, setAllProducts] = useState([]);

  // ^ fetch all category
  useEffect(() => {
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindAllProduct")
      .then((response) => response.json())
      .then((json) => {
        setAllProducts(json);
      });
  }, []);

  // ^ user selected product
  const [selectedProduct, setSelectedProduct] = useState(false);

  return (
    <ProductLayoutBack className="px-2 ">
      <div class="pt-2 d-flex justify-content-between">
        {" "}
        <div>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            Product Layout
          </span>
        </div>
      </div>
      <div
        className="mt-2 p-2"
        style={{ border: "3px solid #fec400", borderRadius: "10px" }}
      >
        <div className="mb-3">
          {selectedProduct && (
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              necessitatibus totam non repudiandae inventore molestiae et
              laborum perferendis nam aperiam, eligendi voluptate perspiciatis,
              quos cumque. Maxime voluptas ratione libero mollitia. Voluptate,
              vel quos fugiat illum repellat et perferendis facere quas
              excepturi. Incidunt reiciendis autem voluptatem magni, amet
              distinctio cupiditate expedita harum tenetur magnam voluptatum
              aliquam! Eum, enim. Molestias consectetur odit voluptatem, nam
              dignissimos accusamus reiciendis at? Nihil facilis id error
              similique voluptatum fugiat maiores nam veritatis cumque vitae! In
              inventore adipisci harum praesentium, officia odio numquam, cum id
              sapiente, ipsum voluptatum quasi eveniet. Ea quod doloremque natus
              facilis eveniet quo quaerat pariatur itaque, fugit sapiente, a
              facere repellat eius ullam hic, quae commodi dolores officiis
              recusandae sed? Culpa error in, nesciunt minus autem temporibus
              sequi voluptatibus. Labore voluptatibus ipsa similique dolorum,
              voluptate reiciendis quis dignissimos minus praesentium, dicta
              error fugiat reprehenderit provident impedit quo sed facere, nisi
              recusandae vitae accusantium commodi! Laudantium porro repudiandae
              eveniet commodi beatae rem saepe. Suscipit magni vitae odio
              voluptatibus voluptas aliquam. Vitae corrupti, iure autem
              reprehenderit sit rem eos iste nulla, cupiditate pariatur
              voluptates, saepe aspernatur quae ipsam tempore rerum? Similique,
              distinctio alias a incidunt ratione rerum! Alias recusandae, ipsam
              quas saepe quisquam consequuntur maxime?
            </div>
          )}
        </div>
        {allLayout.map((layout) => (
          <LayoutProduct
            selectedProduct={setSelectedProduct}
            layout={layout.postCa}
            allProducts={allProducts}
          ></LayoutProduct>
        ))}
      </div>
    </ProductLayoutBack>
  );
}

const ProductLayoutBack = styled.div``;
