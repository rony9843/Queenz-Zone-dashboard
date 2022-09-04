import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function DeleteBtn({ dt, deleteCategory }) {
  const [proLength, setProLength] = useState([]);

  console.log(dt.postCa);

  // for length
  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindAllProduct")
      .then((response) => response.json())
      .then((json) => {
        const filterProduct = json.filter(
          (Prp) => Prp.ProductCategory === dt.postCa
        );
        console.log(json);
        console.log("this is filter : ", filterProduct);
        setProLength(filterProduct);
        ///
        // console.log(json);
        // console.log("this is catagory : ", dt.postCa);
      });
  }, []);

  return (
    <div>
      {proLength.length === 0 ? (
        <IconButton onClick={() => deleteCategory(dt)} aria-label="delete">
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      ) : (
        <IconButton disabled aria-label="delete">
          <DeleteIcon />
        </IconButton>
      )}{" "}
    </div>
  );
}
