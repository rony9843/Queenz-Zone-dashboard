import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import BtnDisable from "./BtnDisable";
import CategoryProductLength from "./CategoryProductLength";
import DeleteBtn from "./DeleteBtn";

export default function AddCategory() {
  const [AllCategory, setAllCategory] = useState([]);
  const [postCategory, setPostCategory] = useState([]);

  // fetch category
  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(
      () =>
        fetch(
          "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead"
        )
          .then((response) => response.json())
          .then((json) => {
            setAllCategory(json);

            console.log("kaj hoise ");
          }),
      1000
    );
  }, [postCategory]);

  // deleteCategory
  const deleteCategory = (props) => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryDelete",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ props }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        fetch(
          "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead"
        )
          .then((response) => response.json())
          .then((json) => {
            setAllCategory(json);

            console.log("kaj hoise ");
          });

        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // post Cetagory
  const cetagory = (props) => {
    console.log("this is input cetagory : ", postCategory);
    // setPostCategory(props);

    if (postCategory.length > 0) {
      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryPost",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postCategory }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setPostCategory("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const [pushCategoryLayout, setPushCategoryLayout] = useState([]);

  // post category in database
  useEffect(() => {
    // Update the document title using the browser API
    // queenZoneCategoryLayoutRead
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryLayoutRead"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is layout :::::::::::; ", json[0].layout);
        setPushCategoryLayout(json[0].layout);
      });
  }, []);

  // push category
  const pushCate = (props) => {
    console.log(props);
    var digits = Math.floor(Math.random() * 9000000000) + 1000000000;
    setPushCategoryLayout([...pushCategoryLayout, [props, digits]]);
  };

  console.log(pushCategoryLayout);

  const remoCate = (props) => {
    const removeProduct = pushCategoryLayout.filter((Prp) => Prp[1] != props);
    setPushCategoryLayout(removeProduct);
  };

  // submit Category layout
  const submiteCate = () => {
    const SubPro = {
      pro: "product",
      layout: pushCategoryLayout,
    };

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryLayout",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ SubPro }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="p-2">
        <div>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>Category</span>
        </div>
        <div
          className="p-2 mt-3 d-flex justify-content-between w-100"
          style={{ border: "2px solid #fec400", borderRadius: "10px" }}
        >
          <div style={{ width: "30%" }}>
            <div style={{ fontSize: "18 px", fontWeight: "bold" }}>
              Add Category
            </div>
            <div>
              <TextField
                className="mt-2"
                onChange={(e) => setPostCategory(e.target.value)}
                style={{ width: "90%" }}
                value={postCategory}
                id="outlined-basic"
                label="Add Category"
                variant="outlined"
              />
            </div>
            <div className="mt-3" style={{ width: "90%" }}>
              <div className="d-flex justify-content-between">
                <div>
                  <Button
                    onClick={() => setPostCategory("")}
                    style={{ backgroundColor: "red" }}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={() => cetagory()}
                    style={{ backgroundColor: "#fec400" }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "80%" }}>
            <div
              style={{
                overflow: "scroll",
                border: "2px solid #fec400",
                borderRadius: "10px",
                backgroundColor: "#f9d55a21",
                height: "150px",
                width: "100%",
                padding: "10px",
              }}
            >
              {AllCategory.map((dt) => (
                <div
                  className="p-2 m-2 d-flex justify-content-between"
                  style={{
                    float: "left",
                    alignItems: "center",

                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  <div class="">
                    <span style={{ color: "gray" }}>{dt.postCa}</span>
                  </div>
                  <div>
                    <DeleteBtn
                      dt={dt}
                      deleteCategory={deleteCategory}
                    ></DeleteBtn>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-3 p-2"
          style={{ border: "2px solid #fec400", borderRadius: "10px" }}
        >
          <div style={{ fontSize: "18 px", fontWeight: "bold" }}>
            Category Layout
          </div>
          <div className="mt-2 w-100 d-flex justify-content-between">
            <div className="w-50">
              {AllCategory.map((ca) => (
                <div
                  className="mt-2 p-2 d-flex justify-content-between"
                  style={{
                    border: "1px solid #fec400",
                    borderRadius: "5px",
                    backgroundColor: "#fdffe0",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span>{ca.postCa}</span>
                  </div>
                  <div>
                    <span>
                      <CategoryProductLength ca={ca}></CategoryProductLength>
                    </span>
                  </div>

                  <div>
                    <BtnDisable pushCate={pushCate} ca={ca}></BtnDisable>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-50">
              <div class="d-flex justify-content-center">
                <div
                  className="m-2"
                  style={{
                    width: "70%",

                    border: "2px solid #fec400",
                    borderRadius: "10px",
                    backgroundColor: "#f9d55a21",

                    padding: "10px",
                  }}
                >
                  <div>
                    {pushCategoryLayout.map((dt) => (
                      <div
                        className="p-2 m-2"
                        style={{
                          backgroundColor: "white",
                          borderRadius: "5px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          class="d-flex justify-content-between"
                          style={{ alignItems: "center" }}
                        >
                          <div>
                            <span>{dt[0]}</span>
                          </div>
                          <div>
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => remoCate(dt[1])}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="m-2 d-flex justify-content-center"
                  style={{ width: "30%" }}
                >
                  <Button
                    style={{ backgroundColor: "#fec400" }}
                    variant="contained"
                    color="success"
                    onClick={() => submiteCate()}
                  >
                    Save Change
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
