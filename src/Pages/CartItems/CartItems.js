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
  // FormControl,
  // InputLabel,
  // Select,
  // MenuItem,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { cloneDeep } from "lodash";
import { getSelectedProduct } from "../Product/Actions/ProductActions";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./cartItems.css";

function CartItems() {
  // const [qty, setQty] = React.useState("");

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

  const handleDeleteItem = (item) => {
    let updateList = cloneDeep(product.selectedProduct);
    let index = updateList.findIndex((res) => res._id === item._id);
    updateList.splice(index, 1);
    dispatch(getSelectedProduct(updateList));
  };

  // const handleChange = (event) => {
  //   setQty(event.target.value);
  // };

  return (
    <Container
      sx={{ margin: "0 auto", width: "100%", margin: "24px", display: "flex" }}
    >
      <Container>
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
                width: "800px",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {res.title}
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
              <div className="deleteIcon" onClick={() => handleDeleteItem(res)}>
                <DeleteOutlinedIcon sx={{ cursor: "pointer" }} />
              </div>
            </Card>
          );
        })}
      </Container>
      <Card
        sx={{
          marginBottom: "8px",
          padding: "8px",
          height: "330px",
          width: "500px",
        }}
      >
        <Container>
          <Box>
            <Typography>Total: 230</Typography>
          </Box>
        </Container>
        <CardActions sx={{ margin: "8px" }}>
          <AddButton size="small" variant="contained">
            Proceed To Pay
          </AddButton>
        </CardActions>
      </Card>
    </Container>
  );
}

export default CartItems;
