import {
  Box,
  Card,
  CardContent,
  CardMedia,
  // Icon,
  Typography,
  Container,
  Button,
  styled,
  CardActions,
  Dialog,
  DialogTitle,
  DialogActions,
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { cloneDeep } from "lodash";
import { getSelectedProduct } from "../Product/Actions/ProductActions";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import "./cartItems.css";

function CartItems() {
  // const [qty, setQty] = React.useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteProduct, setDleleteProduct] = useState(null);
  const [emptyCart, setEmptyCart] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AddButton = styled(Button)(({ theme }) => ({
    marginLeft: "84px",
    border: "1px solid #27374D",
    color: "#fff",
    fontSize: "12px",
    background: "#27374D",
    "&:hover": {
      color: "#fff",
      background: "#27374D",
      fontSize: "12px",
      border: "1px solid #27374D",
    },
  }));
  const product = useSelector((state) => state.selectedProduct);
  // const handleBack = () => {
  //   navigate("/");
  // };
  let temp = product?.selectedProduct?.map((res) => res.price);

  let totalPrice =
    (temp.length > 0 && temp.reduce((acc, curr) => acc + curr)) || 0;
  const handleDeleteItem = () => {
    let updateList = cloneDeep(product.selectedProduct);
    let index = updateList.findIndex((res) => res._id === deleteProduct._id);
    updateList.splice(index, 1);
    dispatch(getSelectedProduct(updateList));
    setOpenDialog(false);
  };

  // const handleChange = (event) => {
  //   setQty(event.target.value);
  // };

  const handleCloseAlert = () => {
    setOpenDialog(false);
  };

  const hendleOpenDialog = (item) => {
    setOpenDialog(true);
    setDleleteProduct(item);
  };

  const handleOrder = () => {
    console.log(product.selectedProduct.length);
    if (product.selectedProduct.length === 0) {
      setEmptyCart(true);
      setOpenDialog(true);
    } else {
      let updateList = cloneDeep(product.selectedProduct);
      updateList = [];
      dispatch(getSelectedProduct(updateList));
      navigate("/order");
    }
  };

  return (
    <Container
      sx={{ marginTop: "24px", width: "100%", height: "84vh", display: "flex" }}
    >
      <Container>
        <Typography variant="h5" sx={{ marginLeft: "16px", color: "#27374D" }}>
          {" "}
          {"> "}Cart Items
        </Typography>
        {product.selectedProduct.length > 0 ? (
          <>
            {product.selectedProduct.map((res) => {
              return (
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "20px",
                    marginBottom: "8px",
                    padding: "8px",
                    height: "150px",
                    width: "750px",
                    position: "relative",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{ color: "#27374D" }}
                      >
                        {res.title}{" "}
                        <DeleteOutlinedIcon
                          onClick={() => hendleOpenDialog(res)}
                          sx={{ cursor: "pointer", verticalAlign: "top" }}
                        />
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Size: {res.availableSizes}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Price: <CurrencyRupeeIcon sx={{ fontSize: "14px" }} />{" "}
                        {res.price}
                      </Typography>
                      {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                   <Select
                     labelId="demo-simple-select-standard-label"
                     id="demo-simple-select-standard"
                     value={qty}
                     onChange={handleChange}
                     label="Qty"
                   >
                     <MenuItem value="1">
                       <em>1</em>
                     </MenuItem>
                     <MenuItem value={2}>2</MenuItem>
                     <MenuItem value={3}>3</MenuItem>
                     <MenuItem value={4}>4</MenuItem>
                     <MenuItem value={5}>5</MenuItem>
                   </Select>
                 </FormControl> */}
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={res.image}
                    alt={res.title}
                  />
                  <div
                    className="deleteIcon"
                    onClick={() => hendleOpenDialog(res)}
                  >
                    <DeleteOutlinedIcon sx={{ cursor: "pointer" }} />
                  </div>
                </Card>
              );
            })}
          </>
        ) : (
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
              marginBottom: "8px",
              padding: "8px",
              height: "325px",
              width: "750px",
            }}
          >
            <Typography variant="h4">No items in your cart!!</Typography>
          </Card>
        )}
      </Container>
      <Card
        sx={{
          position: "relative",
          marginTop: "28px",
          marginBottom: "8px",
          padding: "8px",
          height: "332px",
          width: "500px",
        }}
      >
        <Container>
          <Box>
            <Typography
              variant="h6"
              sx={{ marginTop: "12px", color: "#27374D" }}
            >
              Price Details
            </Typography>
            {product.selectedProduct.length > 0 && (
              <Box sx={{ padding: "24px 0" }}>
                <Typography sx={{ fontSize: "14px", marginBottom: "12px" }}>
                  Price ({product.selectedProduct.length} items){" "}
                  <CurrencyRupeeIcon sx={{ fontSize: "14px" }} />{" "}
                  {totalPrice || 0}
                </Typography>
                <Typography sx={{ fontSize: "14px", marginBottom: "12px" }}>
                  Delivery Charges{" "}
                  <CurrencyRupeeIcon sx={{ fontSize: "14px" }} />{" "}
                  <strike>150</strike> Free Delivery
                </Typography>

                <Typography sx={{ fontSize: "14px", marginBottom: "12px" }}>
                  Total Amount: <CurrencyRupeeIcon sx={{ fontSize: "14px" }} />{" "}
                  {totalPrice}
                </Typography>
              </Box>
            )}
          </Box>
        </Container>
        <CardActions
          sx={{ position: "absolute", bottom: "12px", right: "12px" }}
        >
          <AddButton onClick={handleOrder} size="small" variant="contained">
            Place Order
          </AddButton>
        </CardActions>
      </Card>
      <Dialog
        open={openDialog}
        onClose={handleCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogTitle sx={{color:"#27374D"}} variant="h5" id="alert-dialog-title">{"Alert !!"}</DialogTitle>
        {emptyCart ? (
          <>
            <div className="dialogContent">
              <ReportProblemIcon
                sx={{ fontSize: "48px", color: "#F2BE22" }}
              />
              <Typography sx={{ padding: "0 24px" }}>
                Add items to your cart
              </Typography>
            </div>
            <DialogActions>
              <Button onClick={handleCloseAlert}>Close</Button>
            </DialogActions>
          </>
        ) : (
          <>
            <div className="dialogContent">
              <ReportProblemIcon
                sx={{  fontSize: "48px", color: "#F2BE22" }}
              />
              <Typography sx={{ padding: "0 24px" }}>
                Are you sure you want to reamove <b>{deleteProduct?.title}</b> ?
              </Typography>
            </div>
            <DialogActions>
              <Button onClick={handleCloseAlert}>Cancel</Button>
              <Button onClick={handleDeleteItem} autoFocus>
                Remove
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}

export default CartItems;
