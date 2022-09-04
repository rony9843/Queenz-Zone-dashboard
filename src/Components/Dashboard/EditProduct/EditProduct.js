import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./EditProduct.css";
import SingleProductEdit from "./SingleProductEdit";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function EditProduct() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // edit product info
  const [btnEditProduct, setBtnEditProduct] = useState("");

  //
  const [btnEditOneProduct, setEditOneProduct] = useState("");

  // defold product
  const [defoldEditOneProductImage, setdefoldEditOneProductImage] =
    useState("");

  // defold product
  const [btnEditOneProductProductName, setBtnEditOneProductProductName] =
    useState();
  const [btnEditOneProductProductPrice, setBtnEditOneProductProductPrice] =
    useState();
  const [btnEditOneProductProductOffer, setBtnEditOneProductProductOffer] =
    useState();
  const [btnEditOneProductProductCate, setBtnEditOneProductProductCate] =
    useState();
  const [btnEditOneProductProductDes, setBtnEditOneProductProductDes] =
    useState();
  const [btnEditOneProductProductSize, setBtnEditOneProductProductSize] =
    useState([]);
  const [btnEditOneProductProductTag, setBtnEditOneProductProductTag] =
    useState([]);

  const [isProductSize, setIsporductSize] = useState(false);
  // productId
  const [productId, setproductId] = useState();

  // edit product button
  const editProductBtn = (props) => {
    setproductId(props._id);
    setProdcutEditDisplay(true);
    //  setBtnEditProductImage(props.ProductImage[0][0].image[0][0]);
    //   setBtnEditProduct(props.ProductImage[0]);
    setEditOneProduct(props);
    console.log(props);
    setBtnEditProduct(props.ProductImage);
    setBtnEditOneProductProductName(props.ProductName);
    setBtnEditOneProductProductPrice(props.ProductPrice);
    setBtnEditOneProductProductOffer(props.ProductOffer);
    setBtnEditOneProductProductCate(props.ProductCategory);
    setBtnEditOneProductProductDes(props.ProductDescription);
    setBtnEditOneProductProductSize(props.isSizeShow ? props.productSize : []);
    setIsporductSize(props.isSizeShow);
    setBtnEditOneProductProductTag(props.ProductTags);

    setdefoldEditOneProductImage(props.ProductImage[0][0].image);
  };

  // add product size
  const [AddProductProductSize, setAddProductProductSize] = useState("");

  // add product Tag
  const [AddProductProductTag, setAddProductProductTag] = useState("");

  // delete size btn
  const deleteSizeBtn = (props) => {
    const newSize = btnEditOneProductProductSize.filter((sz) => sz !== props);
    setBtnEditOneProductProductSize(newSize);
  };

  // delete tag btn
  const deleteTagBtn = (props) => {
    const newTag = btnEditOneProductProductTag.filter((tg) => tg !== props);
    setBtnEditOneProductProductTag(newTag);
  };

  // product state
  const [porduct, setProduct] = useState([]);

  // Category state
  const [category, setPCategory] = useState([]);

  // fetch all product
  useEffect(() => {
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneFindAllProduct")
      .then((response) => response.json())
      .then((json) => {
        setProduct(json);
      });
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneCategoryRead")
      .then((response) => response.json())
      .then((json) => {
        setPCategory(json);
        console.log("this is cate : ", json);
      });
  }, []);

  // is product edit display on
  const [isProductEditDisplay, setProdcutEditDisplay] = useState(false);

  // all cancel edit
  const allCancelEdit = () => {
    setEditOneProduct("");

    setBtnEditProduct("");
    setBtnEditOneProductProductName("");
    setBtnEditOneProductProductPrice("");
    setBtnEditOneProductProductOffer("");
    setBtnEditOneProductProductCate("");
    setBtnEditOneProductProductDes("");
    setBtnEditOneProductProductSize([]);
    setIsporductSize(false);
    setBtnEditOneProductProductTag([]);

    setdefoldEditOneProductImage("");
    setProdcutEditDisplay(false);
  };

  // error
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  /// edit all submit btn
  const allEditSubmitBtn = () => {
    if (
      btnEditOneProductProductName !== "" &&
      btnEditOneProductProductPrice !== ""
    ) {
      console.log(btnEditOneProductProductName !== "");
      console.log(btnEditOneProductProductPrice !== "");
      if (isProductSize && !btnEditOneProductProductSize.length) {
        setError({
          state: true,
          message: "hui",
        });
      } else {
        const allEditList = {
          product_id: productId,
          Product_name: btnEditOneProductProductName,
          Product_price: btnEditOneProductProductPrice,
          product_offer:
            btnEditOneProductProductOffer === ""
              ? "null"
              : btnEditOneProductProductOffer,
          product_cate: btnEditOneProductProductCate,
          product_des: btnEditOneProductProductDes,
          product_size: isProductSize ? btnEditOneProductProductSize : false,
          product_tag: btnEditOneProductProductTag,
          isSizeShow: isProductSize,
        };

        // post data
        fetch(
          "https://glacial-shore-36532.herokuapp.com/queenZoneEditedProduct",
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ allEditList }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            handleClick(TransitionLeft);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    } else {
      setError({
        state: true,
        message: "hui",
      });
    }
  };

  return (
    <div className="p-2">
      <Snackbar
        open={open}
        severity="success"
        onClose={handleClose}
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ""}
      />
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>Edit Product</div>
      <div
        className="p-2 mt-3"
        style={{ borderRadius: "10px", border: "2px solid #fec400" }}
      >
        <div
          className="p-2 mb-3"
          style={{
            borderRadius: "5px",
            border: "1px solid #fec400",

            display: `${isProductEditDisplay ? "block" : "none"}`,
          }}
        >
          <div>
            <span style={{ color: "", fontSize: "20px", fontWeight: "" }}>
              Edit Product
            </span>
          </div>
          <div className="mt-3">
            <div className="row">
              <div className="col-3">
                {/* <Carousel>
                  {btnEditProduct !== "" &&
                    btnEditProduct[0][0].image.map((pd) => (
                      <div>
                        <img src={pd[0]} alt="product" />
                        <p className="legend">Legend 1</p>
                      </div>
                    ))}
                </Carousel> */}

                <Carousel>
                  {defoldEditOneProductImage !== "" &&
                    defoldEditOneProductImage.map((pd) => (
                      <div>
                        <img src={pd[0]} alt="product" />
                      </div>
                    ))}
                </Carousel>

                <div>
                  <div class="d-flex justify-content-center">
                    {btnEditProduct !== "" &&
                      btnEditProduct.map((clr) => (
                        <div
                          onClick={() => {
                            setdefoldEditOneProductImage(clr[0].image);
                          }}
                          style={{
                            borderRadius: "50%",
                            backgroundColor: `${clr[0].color}`,
                            width: "20px",
                            height: "20px",
                          }}
                        ></div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-4">
                    <div class="mb-3">
                      <label for="porductname" class="form-label">
                        Name
                      </label>
                      <input
                        onChange={(e) =>
                          setBtnEditOneProductProductName(e.target.value)
                        }
                        value={btnEditOneProductProductName}
                        type="text"
                        class="form-control"
                        id="porductname"
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div class="mb-3">
                      <label for="porductPrice" class="form-label">
                        Price
                      </label>
                      <input
                        type="text"
                        onChange={(e) =>
                          setBtnEditOneProductProductPrice(e.target.value)
                        }
                        value={btnEditOneProductProductPrice}
                        class="form-control"
                        id="porductPrice"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div class="mb-3">
                      <label for="porductOffer" class="form-label">
                        Offer (optional*)
                      </label>
                      <input
                        onChange={(e) =>
                          setBtnEditOneProductProductOffer(e.target.value)
                        }
                        value={btnEditOneProductProductOffer}
                        type="text"
                        class="form-control"
                        id="porductOffer"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div class="mb-3">
                      <label for="porductCate" class="form-label">
                        Category
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={(e) =>
                          setBtnEditOneProductProductCate(e.target.value)
                        }
                      >
                        {category.map((ca) =>
                          ca.postCa === btnEditOneProductProductCate ? (
                            <option selected value={ca.postCa}>
                              {ca.postCa}
                            </option>
                          ) : (
                            <option value={ca.postCa}>{ca.postCa}</option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Description (optional*)
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      onChange={(e) =>
                        setBtnEditOneProductProductDes(e.target.value)
                      }
                      value={btnEditOneProductProductDes}
                    ></textarea>
                  </div>
                  {isProductSize && (
                    <div className="col-6 pt-3">
                      <div class="input-group ">
                        <span>Size</span>
                      </div>
                    </div>
                  )}
                  <div className={isProductSize ? "col-6 pt-3" : "col-12 pt-3"}>
                    <div class="input-group ">
                      <span>Tag</span>
                    </div>
                  </div>
                  {isProductSize && (
                    <div className="col-6 pt-1">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          onChange={(e) =>
                            setAddProductProductSize(
                              e.target.value.toUpperCase()
                            )
                          }
                          value={AddProductProductSize}
                          style={{ textTransform: "uppercase" }}
                          class="form-control"
                          placeholder="size..."
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class=" btn btn-warning"
                          type="button"
                          id="button-addon2"
                          onClick={() => {
                            AddProductProductSize !== "" &&
                              setBtnEditOneProductProductSize([
                                ...btnEditOneProductProductSize,
                                AddProductProductSize,
                              ]);
                            setAddProductProductSize("");
                          }}
                        >
                          Button
                        </button>
                      </div>
                    </div>
                  )}
                  <div className={isProductSize ? "col-6 pt-1" : "col-12 pt-1"}>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="tag..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={(e) =>
                          setAddProductProductTag(e.target.value)
                        }
                        value={AddProductProductTag}
                      />
                      <button
                        class=" btn btn-warning"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                          AddProductProductTag !== "" &&
                            setBtnEditOneProductProductTag([
                              ...btnEditOneProductProductTag,
                              AddProductProductTag,
                            ]);
                          setAddProductProductTag("");
                        }}
                      >
                        Button
                      </button>
                    </div>
                  </div>
                  {isProductSize && (
                    <div className="col-6 p-1">
                      <div
                        style={{
                          overflow: "scroll",
                          border: "2px solid rgb(254, 196, 0)",
                          borderRadius: "10px",
                          backgroundColor: "rgba(249, 213, 90, 0.13)",
                          height: "100px",
                        }}
                      >
                        {btnEditOneProductProductSize.map((sz) => (
                          <div
                            className="p-2 m-2"
                            style={{
                              backgroundColor: "white",
                              borderRadius: "5px",
                              display: "inline-block",
                            }}
                          >
                            <span>{sz}</span>
                            <div
                              onClick={() => {
                                deleteSizeBtn(sz);
                              }}
                              style={{
                                fontSize: "14px",
                                padding: "0px 5px",
                                display: "inline-block",
                                color: "red",
                                cursor: "pointer",
                              }}
                            >
                              <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={isProductSize ? "col-6 p-1" : "col-12 p-1 "}>
                    <div
                      style={{
                        overflow: "scroll",
                        border: "2px solid rgb(254, 196, 0)",
                        borderRadius: "10px",
                        backgroundColor: "rgba(249, 213, 90, 0.13)",
                        height: "100px",
                      }}
                    >
                      {btnEditOneProductProductTag.map((tg) => (
                        <div
                          className="p-2 m-2"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            display: "inline-block",
                          }}
                        >
                          <span>{tg}</span>
                          <div
                            onClick={() => {
                              deleteTagBtn(tg);
                            }}
                            style={{
                              fontSize: "14px",
                              padding: "0px 5px",
                              display: "inline-block",
                              color: "red",
                              cursor: "pointer",
                            }}
                          >
                            <FontAwesomeIcon icon={faTrashCan} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {error.state && (
                    <div className="col-12 mt-2">
                      <Alert variant="outlined" severity="error">
                        This is an error alert — check it out!
                      </Alert>
                    </div>
                  )}
                  <div className="mt-2 d-flex justify-content-between">
                    <div>
                      <Button
                        className="px-5"
                        variant="contained"
                        color="error"
                        onClick={() => allCancelEdit()}
                      >
                        Cancel
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={() => allEditSubmitBtn()}
                        className="px-5"
                        style={{ backgroundColor: "#fec400", color: "black" }}
                        variant="contained"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="p-2"
          style={{ borderRadius: "5px", border: "1px solid #fec400" }}
        >
          <div class="d-flex justify-content-between d-flex align-items-center">
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              Select Category
            </div>
            {/* <div
              class="d-flex justify-content-end "
              style={{ overflow: "scroll" }}
            >
              {category.map((ct) => (
                <div
                  className="p-2 m-1 editProductCate"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                  {ct.postCa}
                </div>
              ))}
            </div> */}
        {/* <div>
          <FormControl sx={{ m: 1, width: 600 }}>
            <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={
                <OutlinedInput id="select-multiple-chip" label="Category" />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {!category.length === true ? (
                <div class="d-flex justify-content-center">
                  <button class="btn btn-warning" type="button" disabled>
                    <span
                      class="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                      style={{ paddingRight: "5px" }}
                    ></span>
                    <span style={{ paddingLeft: "5px" }}>Loading...</span>
                  </button>
                </div>
              ) : (
                category.map((name) => (
                  <MenuItem
                    key={name.postCa}
                    value={name.postCa}
                    style={getStyles(name.postCa, personName, theme)}
                  >
                    {name.postCa}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
        </div> */}
        {/* </div>
        </div> */}
        <div className="row mt-3">
          {porduct.map((pd) => (
            <div className="col-4">
              {" "}
              <SingleProductEdit
                editProductBtn={editProductBtn}
                pd={pd}
              ></SingleProductEdit>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
