import React, { useEffect, useState } from "react";

export default function CategoryProductLength({ ca }) {
  const [proLength, setProLength] = useState([]);

  // for length
  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindAllProduct")
      .then((response) => response.json())
      .then((json) => {
        const filterProduct = json.filter(
          (Prp) => Prp.ProductCategory === ca.postCa
        );
        console.log(filterProduct);
        setProLength(filterProduct);
      });
  }, []);

  return <div>Length : {proLength && proLength.length}</div>;
}
