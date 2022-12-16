import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
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
import StickyBox from "react-sticky-box";
import styled from "styled-components";
import "./EditProduct.css";
import EditProductReDesign from "./EditProductReDesign/EditProductReDesign";

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
  const [btnEditProduct, setBtnEditProduct] = useState([]);

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
  const [btnEditOneProductProductId, setBtnEditOneProductProductId] =
    useState("");

  const [isProductSize, setIsporductSize] = useState(false);
  // productId
  const [productId, setproductId] = useState();

  // ^^^ new edit
  const [FinalProductName, setFinalProductName] = useState();

  const [FinalProductPrice, setFinalProductPrice] = useState();

  const [FinalProductOffer, setFinalProductOffer] = useState();

  const [FinalProductCategory, setFinalProductCategory] = useState();

  const [FinalProductDescription, setFinalProductDescription] = useState();

  // product color on off
  const [isColor, setIsColor] = useState();

  // products brand
  const [isProductBrand, setIsProductBrand] = useState();

  // products brand
  const [ProductBrandOptionName, setProductBrandOptionName] = useState("");

  // products brand
  const [ProductBrandOptionLink, setProductBrandOptionLink] = useState();

  // products brand
  const [ProductBrandName, setProductBrandName] = useState("");

  // products important info state
  const [isProductImportantInfo, setIsProductImportantInfo] = useState();

  // products important info
  const [ProductImportantInfoName, setProductImportantInfoName] = useState(
    "Important information"
  );

  // products important info
  const [ProductImportantInfoText, setProductImportantInfoText] = useState("");

  // products important info
  const [ProductImportantInfoTitleColor, setProductImportantInfoTitleColor] =
    useState("");
  // products important info
  const [
    ProductImportantInfoContentColor,
    setProductImportantInfoContentColor,
  ] = useState("");
  // products important info
  const [
    ProductImportantInfoBackgroundColor,
    setProductImportantInfoBackgroundColor,
  ] = useState("");

  // product Des on off
  const [isProductDescription, setIsProductDescription] = useState(false);

  // product Des name
  const [productDescriptionName, setProductDescriptionName] = useState("");

  // product more details image
  const [IsProductMoreDetailsImage, setIsProductMoreDetailsImageName] =
    useState();

  // product more details image
  const [productMoreDetailsImageName, setProductMoreDetailsImageName] =
    useState("");

  // product more details image
  const [productMoreDetailsMainImageUrl, setProductMoreDetailsMainImageUrl] =
    useState("");
  // product size on off
  const [isSizeShow, setIsSizeShow] = useState(true);

  // input size
  const [inputAllSize, setInputAllSize] = useState([]);

  // input single size
  const [inputOneSize, setInputOneSize] = useState();

  // delete state
  const [deleteState, setDeleteState] = useState(false);

  // product Number
  const [productNumber, setProductNumber] = useState("");

  // error
  const [error, setError] = useState({
    state: false,
    msg: "",
  });

  const handleSizeKeypress = (e) => {
    //it triggers by pressing the enter key

    if (e.keyCode === 13) {
      if (inputOneSize !== "") {
        setInputAllSize([...inputAllSize, inputOneSize]);
        setInputOneSize("");
      }
    }
  };

  const inputSizeBtn = () => {
    inputOneSize && setInputAllSize([...inputAllSize, inputOneSize]);
    setInputOneSize("");
  };

  const dltTag = (props) => {
    const filTag = tagArray.filter((ftag) => ftag != props);

    setTagArray(filTag);
  };

  // use state for addtag
  const [tagArray, setTagArray] = useState([]);

  // use state for addtag
  const [tag, setTag] = useState("");

  // add tag
  const addTag = (props) => {
    if (tag != "") {
      console.log(tag);

      setTagArray([...tagArray, tag]);
      setTag("");
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    console.log("this is clicked 2");
    if (e.keyCode === 13) {
      if (tag != "") {
        console.log(tag);

        setTagArray([...tagArray, tag]);
        setTag("");
      }
    }
  };

  const [FinalProductStock, setFinalProductStock] = useState(false);

  useEffect(() => {
    if (isSizeShow) {
      if (!inputAllSize.length === false) {
        setFinalProductStock(true);
      } else {
        setFinalProductStock(false);
      }
    } else {
      setFinalProductStock(true);
    }
  }, [inputAllSize, isSizeShow]);

  //  ^ new
  // edit product button
  const editProductBtn = (props) => {
    console.log("------ > ", props);
    setProdcutEditDisplay(true);
    setBtnEditProduct(props.ProductImage);
    setdefoldEditOneProductImage(props.ProductImage[0][0].image);
    setProductNumber(props._id);

    setFinalProductName(props.ProductName);

    setFinalProductPrice(props.ProductPrice);
    setIsColor(props.IsProductColor);

    setFinalProductOffer(props.ProductOffer);

    setFinalProductCategory(props.ProductCategory);

    setIsProductBrand(props.isBrand);
    setProductBrandOptionName(props.ProductBrandOptionName);
    setProductBrandOptionLink(props.ProductBrandOptionLink);
    setProductBrandName(props.ProductBrandName);
    setIsProductImportantInfo(props.isProductImportantInfo);
    setProductImportantInfoName(props.ProductImportantInfoName);
    setProductImportantInfoText(props.ProductImportantInfoText);
    setProductImportantInfoTitleColor(props.ProductImportantInfoTitleColor);
    setProductImportantInfoContentColor(props.ProductImportantInfoContentColor);
    setProductImportantInfoBackgroundColor(
      props.ProductImportantInfoBackgroundColor
    );
    setIsProductDescription(props.isProductDescription);
    setProductDescriptionName(props.productDescriptionName);
    setFinalProductDescription(props.FinalProductDescription);
    setIsProductMoreDetailsImageName(props.IsProductMoreDetailsImage);
    setProductMoreDetailsImageName(props.productMoreDetailsImageName);
    setProductMoreDetailsMainImageUrl(props.productMoreDetailsMainImageUrl);
    setInputAllSize(props.productSize);
    setIsSizeShow(props.isSizeShow);
    setTagArray(props.ProductTags);
  };

  // ^ old
  // edit product button
  const O_editProductBtn = (props) => {
    console.log("------ > ", props);

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
    setBtnEditOneProductProductId(props._id);
    setdefoldEditOneProductImage(props.ProductImage[0][0].image);
  };

  // add product size
  const [AddProductProductSize, setAddProductProductSize] = useState("");

  // add product Tag
  const [AddProductProductTag, setAddProductProductTag] = useState("");

  // delete size btn
  const deleteSizeBtn = (props) => {
    console.log("this is size:: ------", props);

    const newSize = inputAllSize.filter((sz) => sz !== props);
    setInputAllSize(newSize);
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
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneFindAllProduct"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this all product : -->> ", json);

        setProduct(json);
        setLoading(json);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead"
    )
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
    console.log("this is all c=cancel : ");

    setEditOneProduct("");

    setBtnEditProduct([]);
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
          "https://queenzzoneserver-production.up.railway.app/queenZoneEditedProduct",
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

  // delete btn value
  const [deleteValue, setDeleteValue] = useState("");

  // onClick delete product handeling
  const deleteProduct = (props) => {
    console.log("this is id ", deleteValue, productNumber);

    if (productNumber === deleteValue) {
      fetch(
        `https://queenzzoneserver-production.up.railway.app/queenZoneProductDelete/${deleteValue}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log("this is delete LLLL ", json);
          allCancelEdit();
        });
    } else {
      setError({
        state: true,
        msg: "Please,Enter the Product's Number",
      });
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <EditProductbackStyle className="p-2">
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
          <div className="mt-3">
            <div className="row d-flex justify-content-between">
              <div className="col-3">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  {/* <Carousel>
                  {btnEditProduct !== "" &&
                    btnEditProduct[0][0].image.map((pd) => (
                      <div>
                        <img src={pd[0]} alt="product" />
                        <p className="legend">Legend 1</p>
                      </div>
                    ))}
                </Carousel> */}

                  <Carousel autoPlay={true} infiniteLoop={true}>
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
                </StickyBox>
              </div>

              {/* <div className="col-9">
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
                        className="px-5 "
                        variant="contained"
                        color="error"
                        onClick={() => allCancelEdit()}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() =>
                          deleteProduct(btnEditOneProductProductId)
                        }
                        className="px-5 mx-2"
                        variant="contained"
                        color="error"
                      >
                        Delete
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
              </div> */}

              <div className="col-9">
                <div>
                  <div className="w-100">
                    <div className="">
                      <div class="d-flex justify-content-between">
                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <div class="mb-3">
                              <label for="productName" class="form-label">
                                Name
                              </label>

                              <textarea
                                type="text"
                                class="form-control"
                                onChange={(e) =>
                                  setFinalProductName(e.target.value)
                                }
                                value={FinalProductName}
                                id="productName"
                                placeholder="product's name"
                                style={{ width: "100%" }}
                              />
                              {/* <div class="d-flex flex-row-reverse bd-highlight">
                      <label
                        for="productName"
                        class="form-label"
                        style={{ fontSize: "10px", color: "red" }}
                      >
                        maximum name length {productNameLength}/30
                      </label>
                    </div> */}
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-2 col-lg-2">
                            <div>
                              <label for="productPrice" class="form-label">
                                Price
                              </label>
                              <div
                                class="input-group mb-3"
                                style={{ height: "30px" }}
                              >
                                <span class="input-group-text">SAR</span>
                                <input
                                  type="number"
                                  onChange={(e) =>
                                    FinalProductPrice(e.target.value)
                                  }
                                  value={FinalProductPrice}
                                  placeholder="50"
                                  class="form-control"
                                  aria-label="Amount (to the nearest dollar)"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-2 col-lg-2">
                            <div>
                              <label for="productOffer" class="form-label">
                                Offer (optional*)
                              </label>
                              <div
                                class="input-group mb-3"
                                style={{ height: "30px" }}
                              >
                                <span class="input-group-text">SAR</span>
                                <input
                                  placeholder="60"
                                  onChange={(e) =>
                                    FinalProductOffer(e.target.value)
                                  }
                                  value={FinalProductOffer}
                                  type="number"
                                  class="form-control"
                                  aria-label="Amount (to the nearest dollar)"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-2 col-lg-2">
                            <div>
                              <label for="productName" class="form-label">
                                Category
                              </label>
                              <select
                                onChange={(e) =>
                                  setFinalProductCategory(e.target.value)
                                }
                                value={FinalProductCategory}
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Select Category</option>
                                {category.map((ca) => (
                                  <option value={ca.postCa}>{ca.postCa}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-2 col-lg-2">
                            <div>
                              <label for="productStock" class="form-label">
                                Product in stock
                              </label>
                              <div
                                onClick={() =>
                                  isSizeShow === false &&
                                  setFinalProductStock(!FinalProductStock)
                                }
                                class="input-group mb-3"
                                style={{
                                  height: "37px",
                                  backgroundColor: `${
                                    FinalProductStock === true ? "lime" : "red"
                                  }`,
                                  borderRadius: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-around",
                                  fontWeight: "bold",
                                  userSelect: "none",
                                  color: `${
                                    FinalProductStock === true
                                      ? "#0d6efd"
                                      : "white"
                                  }`,
                                  cursor: "pointer",
                                }}
                              >
                                <span>Stock</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-sm-12-col-md-6 col-lg-6">
                          <div
                            className=""
                            style={{
                              borderRadius: "5px",
                              border: "1px solid #FEC400",
                              padding: "5px",
                            }}
                          >
                            <div className="d-flex">
                              <div className="">
                                <label for="productName" class="form-label">
                                  <span style={{ color: "#FEC400" }}>
                                    {ProductBrandOptionName}
                                  </span>{" "}
                                  (optional*)
                                </label>
                              </div>

                              <div className="d-flex mx-3">
                                <div>
                                  <div class="form-check ">
                                    {isProductBrand === true ? (
                                      <input
                                        onClick={() => setIsProductBrand(true)}
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductBrand"
                                        checked
                                      />
                                    ) : (
                                      <input
                                        onClick={() => setIsProductBrand(true)}
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductBrand"
                                      />
                                    )}

                                    <label class="form-check-label">On</label>
                                  </div>
                                </div>
                                <div className="mx-2">
                                  <div class="form-check">
                                    {isProductBrand === false ? (
                                      <input
                                        onClick={() => setIsProductBrand(false)}
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductBrand"
                                        checked
                                      />
                                    ) : (
                                      <input
                                        onClick={() => setIsProductBrand(false)}
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductBrand"
                                      />
                                    )}

                                    <label class="form-check-label">Off</label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {isProductBrand === true && (
                              <div>
                                <div class="">
                                  <div className="row mb-3">
                                    <div className="col-5">
                                      <input
                                        className="form-control"
                                        type="text"
                                        onChange={(e) =>
                                          setProductBrandOptionName(
                                            e.target.value
                                          )
                                        }
                                        value={ProductBrandOptionName}
                                      />
                                    </div>
                                    <div className="col-7">
                                      <div className="d-flex justify-content-around">
                                        <Button
                                          style={{
                                            backgroundColor: "#FEC400",
                                            boxShadow: "none",
                                          }}
                                          variant="contained"
                                          onClick={() =>
                                            setProductBrandOptionName("Brand")
                                          }
                                        >
                                          Brand
                                        </Button>
                                        <Button
                                          style={{
                                            backgroundColor: "#FEC400",
                                            boxShadow: "none",
                                          }}
                                          variant="contained"
                                          onClick={() =>
                                            setProductBrandOptionName("Company")
                                          }
                                        >
                                          Company
                                        </Button>
                                        <Button
                                          style={{
                                            backgroundColor: "#FEC400",
                                            boxShadow: "none",
                                          }}
                                          variant="contained"
                                          onClick={() =>
                                            setProductBrandOptionName("Country")
                                          }
                                        >
                                          Country
                                        </Button>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div class="mb-3">
                                      <label for="BrandName" class="form-label">
                                        Name :
                                      </label>

                                      <div class="input-group mb-3">
                                        <input
                                          id="BrandName"
                                          onChange={(e) =>
                                            setProductBrandName(e.target.value)
                                          }
                                          value={ProductBrandName}
                                          type="text"
                                          class="form-control"
                                          placeholder=""
                                          aria-label="Recipient's username"
                                          aria-describedby="button-addon2"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div class="mb-3">
                                      <label for="BrandLink" class="form-label">
                                        Link
                                      </label>

                                      <div class="input-group mb-3">
                                        <input
                                          id="BrandLink"
                                          onChange={(e) =>
                                            setProductBrandOptionLink(
                                              e.target.value
                                            )
                                          }
                                          value={ProductBrandOptionLink}
                                          type="text"
                                          class="form-control"
                                          placeholder="Optional"
                                          aria-label="Recipient's username"
                                          aria-describedby="button-addon2"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-12-col-md-6 col-lg-6">
                          {" "}
                          <div
                            className=""
                            style={{
                              borderRadius: "5px",
                              border: "1px solid #FEC400",
                              padding: "5px",
                            }}
                          >
                            <div className="d-flex">
                              <div className="">
                                <label for="productName" class="form-label">
                                  <span style={{ color: "#FEC400" }}>
                                    {ProductImportantInfoName}
                                  </span>{" "}
                                  (optional*)
                                </label>
                              </div>

                              <div className="d-flex mx-3">
                                <div>
                                  <div class="form-check ">
                                    {isProductImportantInfo === true ? (
                                      <input
                                        onClick={() =>
                                          setIsProductImportantInfo(true)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductImportantInfoName"
                                        checked
                                      />
                                    ) : (
                                      <input
                                        onClick={() =>
                                          setIsProductImportantInfo(true)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductImportantInfoName"
                                      />
                                    )}
                                    <label class="form-check-label">On</label>
                                  </div>
                                </div>
                                <div className="mx-2">
                                  <div class="form-check">
                                    {isProductImportantInfo === false ? (
                                      <input
                                        onClick={() =>
                                          setIsProductImportantInfo(false)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductImportantInfoName"
                                      />
                                    ) : (
                                      <input
                                        onClick={() =>
                                          setIsProductImportantInfo(false)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductImportantInfoName"
                                      />
                                    )}

                                    <label class="form-check-label">Off</label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {isProductImportantInfo === true && (
                              <div>
                                <div class="">
                                  <div className="row mb-3">
                                    <div className="col-7">
                                      <input
                                        className="form-control"
                                        type="text"
                                        onChange={(e) =>
                                          setProductImportantInfoName(
                                            e.target.value
                                          )
                                        }
                                        value={ProductImportantInfoName}
                                      />
                                    </div>
                                    <div className="col-5">
                                      <div className="d-flex justify-content-around">
                                        <Button
                                          style={{
                                            backgroundColor: "#FEC400",
                                            boxShadow: "none",
                                          }}
                                          variant="contained"
                                          onClick={() =>
                                            setProductImportantInfoName(
                                              "Important information"
                                            )
                                          }
                                        >
                                          Important information
                                        </Button>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div class="mb-3">
                                      <label
                                        for="importantInfo"
                                        class="form-label"
                                      >
                                        Information
                                      </label>

                                      <div class="input-group mb-3">
                                        <textarea
                                          id="importantInfo"
                                          onChange={(e) =>
                                            setProductImportantInfoText(
                                              e.target.value
                                            )
                                          }
                                          value={ProductImportantInfoText}
                                          type="text"
                                          class="form-control"
                                          placeholder=""
                                          aria-label="Recipient's username"
                                          aria-describedby="button-addon2"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <div>
                                        <span>
                                          <b>Preview</b>{" "}
                                        </span>
                                      </div>

                                      <div className="d-flex justify-content-end">
                                        <div className=" d-flex align-items-center mx-1">
                                          <div>
                                            <span style={{ fontSize: "13px" }}>
                                              Title :
                                            </span>
                                          </div>

                                          <div>
                                            <input
                                              onChange={(e) => {
                                                setProductImportantInfoTitleColor(
                                                  e.target.value
                                                );
                                              }}
                                              type="color"
                                              value={
                                                ProductImportantInfoTitleColor
                                              }
                                              style={{
                                                border: "none",
                                                height: "18px",
                                              }}
                                            />
                                          </div>
                                        </div>
                                        <div className=" d-flex align-items-center mx-1">
                                          <div>
                                            <span style={{ fontSize: "13px" }}>
                                              Content :
                                            </span>
                                          </div>

                                          <div>
                                            <input
                                              onChange={(e) => {
                                                setProductImportantInfoContentColor(
                                                  e.target.value
                                                );
                                              }}
                                              type="color"
                                              value={
                                                ProductImportantInfoContentColor
                                              }
                                              style={{
                                                border: "none",
                                                height: "18px",
                                              }}
                                            />
                                          </div>
                                        </div>
                                        <div className=" d-flex align-items-center mx-1">
                                          <div>
                                            <span style={{ fontSize: "13px" }}>
                                              Background :
                                            </span>
                                          </div>

                                          <div>
                                            <input
                                              onChange={(e) => {
                                                setProductImportantInfoBackgroundColor(
                                                  e.target.value
                                                );
                                              }}
                                              type="color"
                                              value={
                                                ProductImportantInfoBackgroundColor
                                              }
                                              style={{
                                                border: "none",
                                                height: "18px",
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        borderRadius: "5px",
                                        border: "1px solid #FEC400",
                                        padding: "5px",
                                      }}
                                    >
                                      <div>
                                        <span
                                          style={{
                                            color:
                                              ProductImportantInfoTitleColor,
                                          }}
                                        >
                                          {ProductImportantInfoName} :{" "}
                                        </span>{" "}
                                      </div>
                                      <div
                                        style={{
                                          marginLeft: "10px",
                                          fontSize: "13px",
                                          backgroundColor:
                                            ProductImportantInfoBackgroundColor,
                                          borderRadius: "5px",
                                          padding: "5px",
                                        }}
                                      >
                                        <span
                                          style={{
                                            color:
                                              ProductImportantInfoContentColor,
                                          }}
                                        >
                                          {ProductImportantInfoText}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7">
                          <div
                            style={{
                              borderRadius: "5px",
                              border: "1px solid #FEC400",
                              padding: "5px",
                            }}
                          >
                            <div className="d-flex">
                              <div className="">
                                <label for="productName" class="form-label">
                                  <span style={{ color: "#FEC400" }}>
                                    {productDescriptionName}
                                  </span>{" "}
                                  (optional*)
                                </label>
                              </div>

                              <div className="d-flex mx-3">
                                <div>
                                  <div class="form-check ">
                                    {isProductDescription === true ? (
                                      <input
                                        onClick={() =>
                                          setIsProductDescription(true)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="isProductDescription"
                                        checked
                                      />
                                    ) : (
                                      <input
                                        onClick={() =>
                                          setIsProductDescription(true)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="isProductDescription"
                                      />
                                    )}

                                    <label class="form-check-label">On</label>
                                  </div>
                                </div>
                                <div className="mx-2">
                                  <div class="form-check">
                                    {isProductDescription === false ? (
                                      <input
                                        onClick={() =>
                                          setIsProductDescription(false)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="isProductDescription"
                                      />
                                    ) : (
                                      <input
                                        onClick={() =>
                                          setIsProductDescription(false)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="isProductDescription"
                                      />
                                    )}

                                    <label class="form-check-label">Off</label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Product Description */}

                            {isProductDescription === true && (
                              <div class="">
                                <div className="row mb-3">
                                  <div className="col-4">
                                    <input
                                      className="form-control"
                                      type="text"
                                      onChange={(e) =>
                                        setProductDescriptionName(
                                          e.target.value
                                        )
                                      }
                                      value={productDescriptionName}
                                    />
                                  </div>
                                  <div className="col-8">
                                    <div className="d-flex justify-content-around">
                                      <Button
                                        style={{
                                          backgroundColor: "#FEC400",
                                          boxShadow: "none",
                                        }}
                                        variant="contained"
                                        onClick={() =>
                                          setProductDescriptionName(
                                            "Description"
                                          )
                                        }
                                      >
                                        Description
                                      </Button>
                                      <Button
                                        style={{
                                          backgroundColor: "#FEC400",
                                          boxShadow: "none",
                                        }}
                                        variant="contained"
                                        onClick={() =>
                                          setProductDescriptionName("Details")
                                        }
                                      >
                                        Details
                                      </Button>
                                      <Button
                                        style={{
                                          backgroundColor: "#FEC400",
                                          boxShadow: "none",
                                        }}
                                        variant="contained"
                                        onClick={() =>
                                          setProductDescriptionName(
                                            "Specifications"
                                          )
                                        }
                                      >
                                        Specifications
                                      </Button>
                                    </div>
                                  </div>
                                </div>

                                <CKEditor
                                  editor={ClassicEditor}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setFinalProductDescription(data);
                                  }}
                                  data={FinalProductDescription}
                                />

                                {/* <textarea
                        onChange={(e) => ProductDescription(e.target.value)}
                        class="form-control"
                        aria-label="With textarea"
                        ></textarea> */}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-5 col-lg-5">
                          <div
                            style={{
                              borderRadius: "5px",
                              border: "1px solid #FEC400",
                              padding: "5px",
                            }}
                          >
                            <div className="d-flex">
                              <div className="">
                                <label for="productName" class="form-label">
                                  <span style={{ color: "#FEC400" }}>
                                    {productMoreDetailsImageName}
                                  </span>{" "}
                                  (optional*)
                                </label>
                              </div>

                              <div className="d-flex mx-3">
                                <div>
                                  <div class="form-check ">
                                    {IsProductMoreDetailsImage === true ? (
                                      <input
                                        onClick={() =>
                                          setIsProductMoreDetailsImageName(true)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductMoreDetailsImageName"
                                        checked
                                      />
                                    ) : (
                                      <input
                                        onClick={() =>
                                          setIsProductMoreDetailsImageName(true)
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductMoreDetailsImageName"
                                      />
                                    )}

                                    <label class="form-check-label">On</label>
                                  </div>
                                </div>
                                <div className="mx-2">
                                  <div class="form-check">
                                    {IsProductMoreDetailsImage === false ? (
                                      <input
                                        onClick={() =>
                                          setIsProductMoreDetailsImageName(
                                            false
                                          )
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductMoreDetailsImageName"
                                      />
                                    ) : (
                                      <input
                                        onClick={() =>
                                          setIsProductMoreDetailsImageName(
                                            false
                                          )
                                        }
                                        class="form-check-input"
                                        type="radio"
                                        name="setIsProductMoreDetailsImageName"
                                      />
                                    )}

                                    <label class="form-check-label">Off</label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {IsProductMoreDetailsImage === true && (
                              <div class="">
                                <div className="row mb-3">
                                  <div className="col-8">
                                    <input
                                      className="form-control"
                                      type="text"
                                      onChange={(e) =>
                                        setProductMoreDetailsImageName(
                                          e.target.value
                                        )
                                      }
                                      value={productMoreDetailsImageName}
                                    />
                                  </div>
                                  <div className="col-4">
                                    <div className="d-flex justify-content-around">
                                      <Button
                                        style={{
                                          backgroundColor: "#FEC400",
                                          boxShadow: "none",
                                        }}
                                        variant="contained"
                                        onClick={() =>
                                          setProductMoreDetailsImageName(
                                            "More Details"
                                          )
                                        }
                                      >
                                        More Details
                                      </Button>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <div class="mb-3">
                                    <label for="setMoreUrl" class="form-label">
                                      Image Link
                                    </label>

                                    <div class="input-group mb-3">
                                      <input
                                        id="setMoreUrl"
                                        onChange={(e) =>
                                          setProductMoreDetailsMainImageUrl(
                                            e.target.value
                                          )
                                        }
                                        value={productMoreDetailsMainImageUrl}
                                        type="text"
                                        class="form-control"
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                      />
                                      <button
                                        class="btn btn-outline-secondary"
                                        type="button"
                                        id="button-addon2"
                                        style={{
                                          backgroundColor: "#FFDE4D",
                                          color: "white",
                                          border: "1px solid #FFDE4D",
                                        }}
                                      >
                                        Submit
                                      </button>
                                    </div>

                                    <div id="emailHelp" class="form-text">
                                      Image uploading{" "}
                                      <a
                                        target="_blank"
                                        href="https://imgbb.com/"
                                        rel="noreferrer"
                                      >
                                        WEBSITE
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div style={{ width: "100%" }}>
                                  <img
                                    style={{ width: "100%" }}
                                    src={productMoreDetailsMainImageUrl}
                                    alt=""
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="row mt-2">
                          <div className="col-6">
                            <div className="">
                              <div
                                className="  p-1"
                                style={{
                                  border: "1px solid #fec400",
                                  borderRadius: "10px",
                                }}
                              >
                                <div className=" d-flex justify-content-between ">
                                  <div class="">
                                    <span>Product's Size</span>
                                  </div>
                                  <div>
                                    <Button
                                      className=" p-2 px-3"
                                      style={{
                                        backgroundColor: `${
                                          isSizeShow ? "#fec400" : "#dc3545"
                                        }`,
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        width: "100%",
                                        textAlign: "center",
                                        transition: "1s",
                                        color: `${
                                          isSizeShow ? "black" : "white"
                                        }`,
                                      }}
                                      onClick={() => setIsSizeShow(!isSizeShow)}
                                      variant="contained"
                                    >
                                      {" "}
                                      <b>{isSizeShow ? "On" : "Off"}</b>
                                    </Button>
                                  </div>
                                </div>

                                <div
                                  className=""
                                  style={{
                                    display: `${isSizeShow ? "block" : "none"}`,
                                  }}
                                >
                                  <div class="">
                                    <span>Add Product Size</span>
                                  </div>
                                  <div className="pt-2">
                                    <input
                                      className="p-2"
                                      type="text"
                                      placeholder="size..."
                                      name="size"
                                      onKeyUp={handleSizeKeypress}
                                      onChange={(e) => {
                                        setInputOneSize(
                                          e.target.value.toUpperCase()
                                        );
                                      }}
                                      value={inputOneSize}
                                      id="size"
                                      style={{
                                        borderRadius: "5px",
                                        border: ".5px solid #ced4da",
                                        width: "100%",
                                      }}
                                    />
                                  </div>
                                  <div class=" pt-2 d-flex justify-content-between">
                                    <div>
                                      <Button
                                        className="px-2 p-2"
                                        onClick={() => setInputOneSize("")}
                                        style={{
                                          backgroundColor: `#dc3545`,
                                          borderRadius: "5px",
                                          cursor: "pointer",

                                          textAlign: "center",
                                          transition: "1s",
                                          color: `white`,
                                        }}
                                        variant="contained"
                                      >
                                        cancel
                                      </Button>
                                    </div>
                                    <div>
                                      <Button
                                        className=" px-2 p-2"
                                        onClick={() => inputSizeBtn()}
                                        style={{
                                          backgroundColor: `${
                                            isSizeShow ? "#fec400" : "red"
                                          }`,

                                          borderRadius: "5px",
                                          cursor: "pointer",

                                          textAlign: "center",
                                          transition: "1s",
                                          color: `${
                                            isSizeShow ? "black" : "white"
                                          }`,
                                        }}
                                        variant="contained"
                                      >
                                        add
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="mt-2"
                                  style={{
                                    display: `${isSizeShow ? "block" : "none"}`,
                                  }}
                                >
                                  <div
                                    className=" p-2 input-size-style "
                                    style={{
                                      overflow: "scroll",
                                      border: "2px solid #fec400",
                                      borderRadius: "10px",
                                      backgroundColor: "#f9d55a21",
                                      height: "150px",
                                    }}
                                  >
                                    {inputAllSize.map((sz) => (
                                      <div
                                        className="p-1 m-1"
                                        style={{
                                          backgroundColor: "white",
                                          borderRadius: "5px",
                                          display: "inline-block",
                                        }}
                                      >
                                        <span>{sz}</span>
                                        <div
                                          onClick={() => deleteSizeBtn(sz)}
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
                              </div>
                            </div>
                            <div
                              className=" mt-2 p-1 "
                              style={{
                                border: "1px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="mb-2 ">Product's Number</div>

                              <div
                                className=" p-2 input-size-style "
                                style={{
                                  border: "2px solid #fec400",
                                  borderRadius: "10px",
                                  backgroundColor: "#f9d55a21",
                                }}
                              >
                                <span
                                  className="p-1"
                                  style={{
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                  }}
                                >
                                  {productNumber}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div
                              className="p-1"
                              style={{
                                border: "2px solid #fec400",
                                borderRadius: "10px",
                              }}
                            >
                              {" "}
                              <div className="row">
                                <div className="col">
                                  <div class="mb-3">
                                    <label for="addTags" class="form-label">
                                      Add Tags
                                    </label>
                                    <div class="input-group ">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="add tags..."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        onChange={(e) => setTag(e.target.value)}
                                        // // onKeyPress={handleKeypress}
                                        onKeyUp={handleKeypress}
                                        value={tag}
                                      />
                                      <button
                                        type="button"
                                        class="btn btn-warning"
                                        onClick={() => addTag()}
                                      >
                                        Add
                                      </button>
                                    </div>
                                    <div id="emailHelp" class="form-text">
                                      This tag is for product search
                                    </div>
                                  </div>
                                </div>
                                <div className="">
                                  <div
                                    className=" p-2 tag-array-box "
                                    style={{
                                      overflow: "scroll",
                                      border: "2px solid #fec400",
                                      borderRadius: "10px",
                                      backgroundColor: "#f9d55a21",
                                      height: "300px",
                                    }}
                                  >
                                    {tagArray.map((singleTag) => (
                                      <div
                                        className="p-1 m-1"
                                        style={{
                                          backgroundColor: "white",
                                          borderRadius: "5px",
                                          display: "inline-block",
                                        }}
                                      >
                                        <span>{singleTag}</span>
                                        <div
                                          style={{
                                            fontSize: "14px",
                                            padding: "0px 5px",
                                            display: "inline-block",
                                            color: "red",
                                            cursor: "pointer",
                                          }}
                                        >
                                          <FontAwesomeIcon
                                            icon={faTrashCan}
                                            onClick={() => dltTag(singleTag)}
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="row mt-2" >
                          {btnEditProduct.map((dt) => (
                            <div className="col-6">
                              <ColorImage dt={dt}></ColorImage>
                            </div>
                          ))}
                        </div> */}
                        {error.state === true && (
                          <div className="mt-2">
                            <Alert severity="error">{error.msg}</Alert>
                          </div>
                        )}

                        <div className="d-flex justify-content-between mt-2">
                          <div>
                            <Button
                              onClick={() => allCancelEdit()}
                              variant="contained"
                            >
                              Cancel
                            </Button>
                          </div>
                          <div className="d-flex justify-content-around">
                            <div>
                              <input
                                type="email"
                                onChange={(e) => setDeleteValue(e.target.value)}
                                class={`form-control ${
                                  deleteState
                                    ? "animation_delete_input"
                                    : "animation_delete_input_end"
                                }   `}
                                placeholder="Product's Number"
                              />
                            </div>

                            <div className="px-3">
                              <Button
                                onClick={() => {
                                  deleteState && deleteProduct();
                                  setDeleteState(!deleteState);
                                }}
                                color="error"
                                variant="contained"
                              >
                                Delete
                              </Button>
                            </div>
                          </div>
                          <div>
                            <Button
                              variant="contained"
                              style={{ backgroundColor: "#FEC400" }}
                            >
                              Save Changes
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <EditProductbackStyle
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
              {/* <SingleProductEdit
                editProductBtn={editProductBtn}
                pd={pd}
              ></SingleProductEdit> */}
            </div>
          ))}
          <div>
            {loading === false && (
              <div className="mt-5 pt-5 pb-5 mb-5 d-flex justify-content-center">
                <div class="mt-5 spinner-border text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
          {category.map((cate) => (
            <div>
              <EditProductReDesign
                editProductBtn={editProductBtn}
                layout={cate.postCa}
                porduct={porduct}
              ></EditProductReDesign>
            </div>
          ))}
        </div>
      </div>
    </EditProductbackStyle>
  );
}

const EditProductbackStyle = styled.div`
  .ck-rounded-corners .ck.ck-editor__main > .ck-editor__editable,
  .ck.ck-editor__main > .ck-editor__editable.ck-rounded-corners {
    height: 500px;
  }
  .input-size-style {
  }

  .input-size-style::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  .input-size-style::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
  }

  /* Handle */
  .input-size-style::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .input-size-style::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  .tag-array-box::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  .tag-array-box::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 10px;
  }

  /* Handle */
  .tag-array-box::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  .tag-array-box::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  .tag-array-box {
  }

  /* .animation_delete_input{

  } */

  .animation_delete_input {
    width: 300px;
    display: block;

    animation-name: animation_delete_input_css;
    animation-duration: 2s;
  }

  @keyframes animation_delete_input_css {
    from {
      width: 30px;
      opacity: 0;
    }
    to {
      width: 300px;
      opacity: 1;
    }
  }

  .animation_delete_input_end {
    animation-name: animation_delete_input_end_css;
    animation-duration: 2s;
    opacity: 0;
    display: none;
  }

  @keyframes animation_delete_input_end_css {
    from {
      width: 300px;
      opacity: 1;
      display: block;
    }
    to {
      width: 30px;
      opacity: 0;
      display: none;
      display: block;
    }
  }
`;
