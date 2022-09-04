import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function BtnDisable({ pushCate, ca }) {
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

  return (
    <div>
      {proLength.length > 0 ? (
        <Button
          style={{ border: "1px solid #fec400" }}
          variant="outlined"
          onClick={() => pushCate(ca.postCa)}
        >
          Push Category
        </Button>
      ) : (
        <Button
          style={{ border: "1px solid #fec400" }}
          variant="outlined"
          disabled
        >
          Push Category
        </Button>
      )}
    </div>
  );
}
