import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import ProductsCard from "./ProductsCard";
import ProductsModal from "./ProductsModal";

// ? modal style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",

    width: "80%",

    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Top20() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#FEC400";
  }

  const [allProduct, setAllProduct] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [selectModalProduct, setSelectModalProduct] = useState([]);
  const [modalFilterCatePro, setFilterCatePro] = useState([]);
  const [selectedCate, setSelectedCate] = useState("");

  const [renNumber, setrenNumber] = useState(2);

  // for database category and product data
  const [fetchData, setFetchData] = useState([]);

  function closeModal() {
    setIsOpen(false);

    callCate();

    //  setSelectModalProduct([]);
  }

  useEffect(() => {
    callCate();
  }, []);

  const callCate = () => {
    // ? fetch all product
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCategoryRead"
    )
      .then((response) => response.json())
      .then((json) => {
        setAllCategory(json);
        readAllProduct();
      });
  };

  const readAllProduct = () => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneFindAllProduct"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setAllProduct(json);
        setrenNumber(renNumber + 3);
      });
  };

  // filter category product
  const filterCategoryProduct = (props) => {
    setSelectedCate(props.postCa);
    let filterPro = allProduct.filter(
      (pd) => pd.ProductCategory === props.postCa
    );

    setFilterCatePro(filterPro);
  };

  // add product for card
  const addProduct = (props) => {
    const alreadyAdd = selectModalProduct.filter((dt) => dt.id === props.id);

    console.log(props, "is exist -- ", alreadyAdd);

    if (!alreadyAdd.length === true) {
      setSelectModalProduct([...selectModalProduct, props]);
    } else {
      const removeProduct = selectModalProduct.filter(
        (dt) => dt.id !== props.id
      );

      setSelectModalProduct(removeProduct);
    }
  };

  // ^ post data
  const AddProductFromDb = () => {
    const top20 = {
      cate: selectedCate,
      productsId: selectModalProduct,
    };

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZonePostTop20",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ top20: top20 }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        callFetchData();
        closeModal();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    callFetchData();
  }, []);

  // call data form database
  const callFetchData = () => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneReadTop20"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("this is fetch data : ", json);
        setFetchData(json);
        readAllProduct();
      });
  };

  return (
    <TopBack>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Select Products</h2>

          <div
            className="row"
            style={{
              height: "520px",
              overflowY: "scroll",
            }}
          >
            {modalFilterCatePro?.map((pd) => (
              <ProductsModal
                fetchData={fetchData}
                selectModalProduct={selectModalProduct}
                pd={pd}
                selectProductFunction={addProduct}
              ></ProductsModal>
            ))}
          </div>
          <div className="pt-2 d-flex justify-content-between">
            <div>
              <Button
                onClick={closeModal}
                variant="contained"
                style={{
                  backgroundColor: "#FEC400",
                  color: "black",
                }}
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => AddProductFromDb()}
                style={{
                  backgroundColor: "#FEC400",
                  color: "black",
                }}
              >
                Add Product
              </Button>
            </div>
          </div>
        </Modal>
      </div>
      <div>
        <div>
          <div className="p-2">
            <div class="pt-2 d-flex justify-content-between">
              {" "}
              <div>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Top 20
                </span>
              </div>
            </div>

            <div
              className="mt-2 p-2"
              style={{ border: "3px solid #fec400", borderRadius: "10px" }}
            >
              {allCategory.map((ca) => (
                <div>
                  <div
                    className="p-2 m-2"
                    style={{
                      border: "2px solid #FEC400",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <div>Category : {ca.postCa} </div>
                      <div>
                        <Button
                          onClick={() => {
                            openModal();
                            filterCategoryProduct(ca);
                          }}
                          variant="contained"
                          style={{
                            backgroundColor: "#FEC400",
                            color: "black",
                          }}
                        >
                          Add Product
                        </Button>
                      </div>
                    </div>
                    <hr
                      className="mt-2 mb-2"
                      style={{ padding: "0px", margin: "0px" }}
                    />
                    <div className="d-flex" style={{ overflowX: "scroll" }}>
                      {allProduct.map((pd) => (
                        <ProductsCard
                          renNumber={renNumber}
                          fetchData={fetchData}
                          pd={pd}
                          pdC={ca.postCa}
                        ></ProductsCard>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TopBack>
  );
}

const TopBack = styled.div``;
