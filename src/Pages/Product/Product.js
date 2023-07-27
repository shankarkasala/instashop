import {
  Box,
  Button,
  Container,
  Snackbar,
  Typography,
  Alert,
  Rating,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./product.css";
import { cloneDeep } from "lodash";
import { getSelectedProduct } from "./Actions/ProductActions";
function Product() {
  const [selectedSize, setSelectedSize] = useState("");
  const [successAlert, setSuccesAlert] = useState(false);
  const [failAlert, setFailAlert] = useState(false);
  const [value, setValue] = React.useState(3);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.selectedProduct);

  const SizeButton = styled(Button)(({ theme }) => ({
    marginRight: "8px",
    border: "1px solid #001C30",
    color: "#001C30",
    "&:hover": {
      border: "1px solid #001C30",
      color: "#001C30",
    },
  }));

  const SelectedButton = styled(Button)(({ theme }) => ({
    marginRight: "8px",
    background: "#27374D",
    color: "#ffff",
    "&:hover": {
      background: "#27374D",
      color: "#ffff",
    },
  }));

  const CartButton = styled(Button)(({ theme }) => ({
    width: "120px",
    marginTop: "180px",
    float: "right",
    padding: "8px",
    background: "#27374D",
    border: "1px solid #27374D",
    color: "#fff",
    fontSize: "12px",
    "&:hover": {
      background: "#27374D",
      color: "#fffff",
      fontSize: "12px",
    },
  }));

  const CancelButton = styled(Button)(({ theme }) => ({
    width: "120px",
    marginTop: "180px",
    float: "right",
    padding: "8px",
    background: "#DDE6ED",
    border: "1px solid #27374D",
    color: "#27374D",
    fontSize: "12px",
    "&:hover": {
      background: "#DDE6ED",
      color: "#27374D",
      fontSize: "12px",
      border: "1px solid #27374D",
    },
  }));

  const handleBack = () => {
    navigate("/");
  };

  const handleSelectSize = (val) => {
    setSelectedSize(val);
  };

  const handleSelectedItem = () => {
    if (selectedSize) {
      setSuccesAlert(true);
      let selectedItem = cloneDeep(product?.product);
      selectedItem.availableSizes = [selectedSize];
      let cart = cloneDeep(cartItems.selectedProduct);
      cart.push(selectedItem);
      dispatch(getSelectedProduct(cart));
      setTimeout(() => {
        navigate("/cartItems");
      }, 3000);
    } else {
      setFailAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setFailAlert(false);
    setSuccesAlert(false);
  };

  return (
    <Container
      sx={{ width: "calc(100% - 120px)", margin: "0 auto", padding: "24px" }}
    >
      <Box sx={{ height: "100%", width: "100%" }}>
        <div>
          <Typography
            variant="h5"
            sx={{ color: "#001C30", marginBottom: "8px" }}
          >
            {product?.product?.title}
          </Typography>
          <div className="productContainer">
            <img
              className="image"
              src={product?.product?.image}
              alt={product?.product?.title}
            />
            <div className="productDetails">
              <Typography sx={{ padding: "0 16px", fontSize: "16px" }}>
                {product?.product?.description}
              </Typography>
              <Rating
              sx={{marginLeft:"16px"}}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <div className="sizeContainer">
                {product?.product?.availableSizes.map((res) => (
                  <div onClick={() => handleSelectSize(res)}>
                    {selectedSize === res ? (
                      <SelectedButton variant="outlined" size="small">
                        {res && res}
                      </SelectedButton>
                    ) : (
                      <SizeButton variant="outlined" size="small">
                        {res && res}
                      </SizeButton>
                    )}
                  </div>
                ))}
              </div>
              <CartButton onClick={handleSelectedItem} variant="contained">
                Go to cart{" "}
                <ShoppingCartIcon
                  sx={{ marginLeft: "4px", fontSize: "14px" }}
                />
              </CartButton>
              <CancelButton
                onClick={handleBack}
                variant="outlined"
                sx={{ marginRight: "8px" }}
              >
                Cancel
              </CancelButton>
            </div>
          </div>
        </div>
      </Box>
      <Snackbar
        open={successAlert || failAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        {successAlert ? (
          <Alert
            onClose={handleCloseAlert}
            severity="success"
            sx={{ width: "100%" }}
          >
            Item Added to the Cart!
          </Alert>
        ) : (
          <Alert
            onClose={handleCloseAlert}
            severity="error"
            sx={{ width: "100%" }}
          >
            select the avilable size!
          </Alert>
        )}
      </Snackbar>
    </Container>
  );
}

export default Product;
