import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

import "./header.css";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const product = useSelector((state) => state.selectedProduct);
console.log(product)
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const handleBack = () => {
    navigate("/");
  };

  const handleGoCart = () => {
    navigate('/cartitems')
  }
  return (
    <AppBar position="static" sx={{ background: "#27374D", display: "flex" }}>
      <Container maxWidth="xl" sx={{ display: "flex" ,justifyContent:"space-between"}}>
        <Toolbar disableGutters>
          <LocalMallIcon sx={{ marginRight: "8px" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleBack}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Shoppy
          </Typography>
        </Toolbar>
        <IconButton aria-label="cart" onClick={handleGoCart}>
          <StyledBadge badgeContent={product.selectedProduct.length} color="primary">
            <ShoppingCartIcon sx={{ color: "#fff" }} />
          </StyledBadge>
        </IconButton>
      </Container>
    </AppBar>
  );
}

export default Header;
