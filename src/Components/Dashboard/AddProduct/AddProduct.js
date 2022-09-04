import React, { useState } from "react";

export default function AddProduct() {
  const [imageNumbr, setImageNumber] = useState([1]);

  const [one_Color_Pic, set_One_Color_Pic] = useState([]);

  const [number, setNumber] = useState();

  const addImage = (props) => {
    setImageNumber([...imageNumbr, props]);
    setNumber(props);
  };

  const seeImageUrl = (props) => {
    const new_data = [...one_Color_Pic, props];

    set_One_Color_Pic(new_data);
  };

  const color = (props) => {
    console.log(props);
  };

  const suw = () => {
    console.log(one_Color_Pic);
  };

  const [imageOneColor, setImageOneColor] = useState([1]);

  const OneColor = (props) => {
    console.log(one_Color_Pic);
    setImageOneColor([...imageOneColor, props]);
  };

  return (
    <div>
      <div>
        <div>
          <input type="text" placeholder="Product name..." />

          <button onClick={() => OneColor("1")}>Add One color Product</button>

          {imageOneColor.map((oneColor) => (
            <div>
              <input
                type="text-fild"
                placeholder="Product color..."
                onBlur={(e) => color(e.target.value)}
              />

              <div style={{ backgroundColor: "yellow" }}>
                {imageNumbr.map((dt) => (
                  <input
                    type="text"
                    placeholder="Product pic..."
                    onBlur={(e) => seeImageUrl(["black", e.target.value])}
                  />
                ))}
              </div>

              <button onClick={() => addImage(number + 1)}>Plus</button>
            </div>
          ))}

          <button onClick={() => suw()}>show</button>
        </div>
      </div>
    </div>
  );
}
