import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

export default function ProductCards() {
  const [SNumber, setSNumber] = useState(
    Math.floor(Math.random() * 400000) + 100000
  );

  const [dbId, setDbId] = useState("");

  const [pName, setPname] = useState("");
  const [mt, setMt] = useState("");
  const [mb, setMb] = useState("");
  const [pt, setPt] = useState("");
  const [pb, setPb] = useState("");
  const [borRa, setBorRa] = useState("");
  const [bgClr, setBgClr] = useState("");
  const [btnText, setBtnText] = useState("");
  const [btnBgClr, setBtnBgClr] = useState("");

  const [edit, setEdit] = useState(false);

  const [allProducts, setAllProducts] = useState([]);

  const [selectProducts, setSelectProducts] = useState([]);

  useEffect(() => {
    console.log("this is select product list : ", selectProducts);
  }, [selectProducts]);

  // for length
  useEffect(() => {
    callProduct();
  }, []);

  const callProduct = () => {
    // Update the document title using the browser API
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneFindAllProduct"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setAllProducts(json);
      });
  };

  // submit btn
  const submit = () => {
    if (!selectProducts.length === false) {
      const componentsSection = {
        type: "productCards",
        pageName: pName,
        sName: SNumber,
        mt: mt,
        mb: mb,
        pt: pt,
        pb: pb,
        borRa: borRa,
        bgClr: bgClr,
        components: selectProducts,
        btnBgClr: btnBgClr,
        btnText: btnText,
      };

      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenzZoneCreateProductCards",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ componentsSection: componentsSection }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          callData();
          setSNumber(Math.floor(Math.random() * 400000) + 100000);
          setPname("");
          setMt("");
          setMb("");
          setPt("");
          setPb("");
          setBorRa("");

          setSelectProducts([]);

          setBgClr("");
          setDbId("");

          setBtnText("");
          setBtnBgClr("");

          setButtonRe(buttonRe + 1);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    callData();
  }, []);

  // call data
  const callData = () => {
    // Update the document title using the browser API
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenzZoneReadProductCards"
    )
      .then((response) => response.json())
      .then((json) => {
        setFetchData(json);
      });
  };

  // delete
  const deleteBtn = (props) => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenzZoneDeleteProductCards",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: props }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        callData();
        clear();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [filterProductCall, setFilterPorductCall] = useState(1);

  const editBtn = (props) => {
    setSNumber(props.componentsSection.productCards);
    setPname(props.componentsSection.pageName);
    setMt(props.componentsSection.mt);
    setMb(props.componentsSection.mb);
    setPt(props.componentsSection.pt);
    setPb(props.componentsSection.pb);
    setBorRa(props.componentsSection.borRa);
    setBtnText(props.componentsSection.btnText);
    setBtnBgClr(props.componentsSection.btnBgClr);

    setBgClr(props.componentsSection.bgClr);
    setDbId(props._id);

    // const filterPro = allProducts.filter((id) =>
    //   props.productCards.components.filter((pId) => pId !== id._id)
    // );

    // let cou = [];

    // const filterPro = props.productCards.components.filter((id) =>
    //   allProducts.filter((pId) =>
    //     (pId._id !== id) === false ? cou.push(pId._id) : cou.push(null)
    //   )
    // );

    // setSelectProducts(cou);

    // console.log("222c :", props.productCards.components);
    // console.log("222c 55 : ", filterPro);
    // console.log("222c 88 : ", cou);

    // setFilterPorductCall(filterProductCall + 2);

    setEdit(true);
    setSelectProducts(props.componentsSection.components);

    setButtonRe(buttonRe + 1);
  };

  //  clear btn
  const clear = () => {
    setSNumber(Math.floor(Math.random() * 400000) + 100000);
    setPname("");
    setMt("");
    setMb("");
    setPt("");
    setPb("");
    setBorRa("");

    setSelectProducts([]);

    setBgClr("");
    setDbId("");
    setBtnText("");
    setBtnBgClr("");

    setButtonRe(buttonRe + 1);
    setTimeout(() => {
      setEdit(false);
    }, 1000);
  };

  const [buttonRe, setButtonRe] = useState(2);

  const updatePost = () => {
    if (!selectProducts.length === false) {
      const componentsSection = {
        id: dbId,
        type: "productCards",
        pageName: pName,
        sName: SNumber,
        mt: mt,
        mb: mb,
        pt: pt,
        pb: pb,
        borRa: borRa,
        bgClr: bgClr,
        components: selectProducts,
        btnBgClr: btnBgClr,
        btnText: btnText,
      };

      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenzZoneEditProductCards",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ componentsSection: componentsSection }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          callData();
          setSNumber(Math.floor(Math.random() * 400000) + 100000);
          setPname("");
          setMt("");
          setMb("");
          setPt("");
          setPb("");
          setBorRa("");

          setSelectProducts([]);

          setBgClr("");
          setDbId("");

          setBtnText("");
          setBtnBgClr("");

          setButtonRe(buttonRe + 1);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <TopBack>
      <div>
        <div>
          <div className="p-2">
            <div class="pt-2 d-flex justify-content-between">
              {" "}
              <div>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Product Cards
                </span>
              </div>
            </div>

            <div
              className="mt-2 p-2"
              style={{ border: "3px solid #fec400", borderRadius: "10px" }}
            >
              <div>
                <div className="row">
                  <div className="col-8">
                    {" "}
                    <div class="">
                      <label for="cardsName" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setPname(e.target.value)}
                        value={pName}
                        id="cardsName"
                        aria-describedby="cardsName"
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="">
                      <label for="cardsName" class="form-label">
                        Id
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cardsName"
                        aria-describedby="cardsName"
                        disabled
                        value={SNumber}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="p-2 mt-2"
                style={{
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                }}
              >
                <div>
                  <div className="mt-2">
                    <h5>Only for home page</h5>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <div class="">
                        <label for="cardsName" class="form-label">
                          MT
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="cardsName"
                          aria-describedby="cardsName"
                          max="5"
                          min={0}
                          onChange={(e) => setMt(e.target.value)}
                          value={mt}
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div class="">
                        <label for="cardsName" class="form-label">
                          Mb
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="cardsName"
                          aria-describedby="cardsName"
                          max="5"
                          min={0}
                          onChange={(e) => setMb(e.target.value)}
                          value={mb}
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div class="">
                        <label for="cardsName" class="form-label">
                          PT
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="cardsName"
                          aria-describedby="cardsName"
                          max="5"
                          min={0}
                          onChange={(e) => setPt(e.target.value)}
                          value={pt}
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div class="">
                        <label for="cardsName" class="form-label">
                          PB
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="cardsName"
                          aria-describedby="cardsName"
                          max="5"
                          min={0}
                          onChange={(e) => setPb(e.target.value)}
                          value={pb}
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div class="">
                        <label for="cardsName" class="form-label">
                          Bor Ra
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="cardsName"
                          aria-describedby="cardsName"
                          max="20"
                          min={0}
                          onChange={(e) => setBorRa(e.target.value)}
                          value={borRa}
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <span>Bg Clr</span>
                      </div>
                      <div className="mt-2">
                        <input
                          type="color"
                          name=""
                          id=""
                          onChange={(e) => setBgClr(e.target.value)}
                          value={bgClr}
                          style={{
                            width: "100%",
                            borderRadius: "5px",
                            border: "none",
                            height: "39px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-10">
                      <div class="">
                        <label for="cardsName" class="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="cardsName"
                          aria-describedby="cardsName"
                          onChange={(e) => setBtnText(e.target.value)}
                          value={btnText}
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <span>Btn Bg Clr</span>
                      </div>
                      <div className="mt-2">
                        <input
                          type="color"
                          name=""
                          id=""
                          onChange={(e) => setBtnBgClr(e.target.value)}
                          value={btnBgClr}
                          style={{
                            width: "100%",
                            borderRadius: "5px",
                            border: "none",
                            height: "39px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="mt-3">
                <b>Add Product Cards</b>
              </h5>
              <div
                style={{
                  overflowY: "scroll",
                  height: "400px",
                  border: "2px solid #fec400",
                  borderRadius: "10px",
                }}
              >
                <div className="row w-100 p-2">
                  {allProducts.map((pd) => (
                    <Card
                      edit={edit}
                      buttonRe={buttonRe}
                      SNumber={SNumber}
                      filterProductCall={filterProductCall}
                      selectProducts={selectProducts}
                      setSelectProducts={setSelectProducts}
                      pd={pd}
                    ></Card>
                  ))}
                </div>
              </div>
              {edit === true ? (
                <div className=" mt-3 p-2 d-flex justify-content-between">
                  <Button
                    onClick={() => {
                      deleteBtn(dbId);
                    }}
                    style={{ backgroundColor: "red", color: "white" }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      clear();
                    }}
                    style={{ backgroundColor: "#FEC400", color: "black" }}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      updatePost();
                    }}
                    style={{ backgroundColor: "#FEC400", color: "black" }}
                    variant="contained"
                  >
                    Save Edit
                  </Button>
                </div>
              ) : (
                <div className="mt-3 p-2 d-flex justify-content-end">
                  <Button
                    onClick={() => {
                      pName !== "" && submit();
                    }}
                    style={{ backgroundColor: "#FEC400", color: "black" }}
                    variant="contained"
                  >
                    Create Product Cards
                  </Button>
                </div>
              )}

              <div className="row mt-3 p-2 ">
                {fetchData.map((dt) => (
                  <div className="col-6 mt-1 p-1 ">
                    <div
                      className="p-1"
                      style={{
                        border: "2px solid #fec400",
                        borderRadius: "10px",
                      }}
                    >
                      {" "}
                      <div className="row">
                        <div className="col-6">
                          Name : {dt.componentsSection.pageName}
                        </div>
                        <div className="col-6">
                          Number : {dt.componentsSection.sName}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3">
                          Mt : {dt.componentsSection.mt}
                        </div>
                        <div className="col-3">
                          Mb : {dt.componentsSection.mb}
                        </div>
                        <div className="col-3">
                          Pt : {dt.componentsSection.pt}
                        </div>
                        <div className="col-3">
                          Pb : {dt.componentsSection.pb}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          borRa : {dt.componentsSection.borRa}
                        </div>
                        <div className="col-6">
                          <div className="d-flex">
                            bgClr :{" "}
                            <div
                              style={{
                                backgroundColor: `${dt.componentsSection.bgClr}`,
                                borderRadius: "5px",
                                height: "20px",
                                width: "20px",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          Title : {dt.componentsSection.btnText}
                        </div>
                        <div className="col-6">
                          <div className="d-flex">
                            Btn bg Clr :{" "}
                            <div
                              style={{
                                backgroundColor: `${dt.componentsSection.btnBgClr}`,
                                borderRadius: "5px",
                                height: "20px",
                                width: "20px",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <Button
                          onClick={() => {
                            deleteBtn(dt._id);
                          }}
                          style={{ backgroundColor: "red", color: "white" }}
                          variant="contained"
                        >
                          Delete
                        </Button>
                        <Button
                          onClick={() => {
                            editBtn(dt);
                          }}
                          style={{ backgroundColor: "#FEC400", color: "black" }}
                          variant="contained"
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBack>
  );
}

const TopBack = styled.div``;
