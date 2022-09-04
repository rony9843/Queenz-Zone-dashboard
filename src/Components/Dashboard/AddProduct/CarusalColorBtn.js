import React, { useState } from "react";

export default function CarusalColorBtn({ dt, SelectCarusalForColor }) {
  const [stylebtn, setStyleBtn] = useState(false);

  const SelectStyle = () => {
    setStyleBtn(true);
  };

  return (
    <div>
      <button
        className="p-2 btn  "
        style={{
          height: "20px",
          width: "20px",
          margin: "0px 5px",
          borderRadius: "50%",
          backgroundColor: `${dt[0].color}`,
        }}
        onClick={() => {
          SelectCarusalForColor(dt);
          SelectStyle();
        }}
      ></button>
    </div>
  );
}
