import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./product.css";
function Product() {
  const navigate = useNavigate();
  const product = useSelector((state) => state.product);

  const SizeButton = styled(Button)(({ theme }) => ({
    marginRight: "8px",
    border: "1px solid #001C30",
    color: "#001C30",
    "&:hover": {
      border: "1px solid #001C30",
      color: "#001C30",
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
                  <SizeButton variant="outlined" size="small">
                    {res && res}
                  </SizeButton>
                ))}
              </div>
              <CartButton variant="contained">Add to cart</CartButton>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default Product;
