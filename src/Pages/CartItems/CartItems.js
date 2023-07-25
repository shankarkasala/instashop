import { Icon } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CartItems() {
    const navigate = useNavigate();
    const product = useSelector((state) => state.selectedProduct);
    const handleBack = () => {
        navigate("/");
      };
      console.log(product)
  return (
    <div>
         <Icon
              component={ArrowBackIcon}
              sx={{ marginRight: "8px", cursor: "pointer" }}
              onClick={handleBack}
            />
    </div>
  )
}

export default CartItems