import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./product.css";
import { cloneDeep } from "lodash";
import { getSelectedProduct } from './Actions/ProductActions';
function Product() {
  const [selectedSize, setSelectedSize] = useState('')
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
    background: "#001C30",
    color: "#ffff",
    "&:hover": {
      background: "#001C30",
      color: "#ffff",
    },
  }));

  const CartButton = styled(Button)(({ theme }) => ({
    marginTop: "160px",
    float: "right",
    padding: "8px",
    background: "#001C30",
    border: "1px solid #001C30",
    color: "##fffff",
    fontSize: "12px",
    "&:hover": {
      background: "#001C30",
      color: "#fffff",
      fontSize: "12px",
    },
  }));

  const handleBack = () => {
    navigate("/");
  };

  const handleSelectSize = (val) => {

      setSelectedSize(val)
  }

  const handleSelectedItem = () => {
    let selectedItem = cloneDeep(product?.product)
    selectedItem.availableSizes = [selectedSize]
    let cart = cloneDeep(cartItems.selectedProduct)
    cart.push(selectedItem)
    dispatch(getSelectedProduct(cart))
    navigate('/cartItems')
  }

  return (
    <Container
      sx={{ width: "calc(100% - 120px)", margin: "0 auto", padding: "24px" }}
    >
      <Box sx={{ height: "100%", width: "100%" }}>
        <div>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              padding: "0px",
              marginLeft: "0px",
            }}
          >
            <Icon
              component={ArrowBackIcon}
              sx={{ marginRight: "8px", cursor: "pointer" }}
              onClick={handleBack}
            />
            <Typography variant="h5" sx={{ color: "#001C30" }}>
              {product?.product?.title}
            </Typography>
          </Container>

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
              <div className="sizeContainer">
                {product?.product?.availableSizes.map((res) => (
                  <div onClick={()=>handleSelectSize(res)}>
                  
                    {selectedSize === res ?  
                    <SelectedButton variant="outlined" size="small">
                      {res && res}
                    </SelectedButton> :
                     <SizeButton variant="outlined" size="small">
                    {res && res}
                  </SizeButton>}
                  </div>
                ))}
              </div>
              <CartButton onClick={handleSelectedItem} variant="contained">Add to cart</CartButton>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default Product;
