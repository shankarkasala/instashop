import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import data from "../../data.json";
import { useDispatch } from "react-redux";
import { getProduct } from "./Actions/ProductsActions";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickCard = (data) => {
    dispatch(getProduct(data));
    navigate("/product");
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {data.products.map((res) => {
          return (
            <Card
              key={res._id}
              sx={{
                width: "250px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "16px",
                cursor: "pointer",
                boxShadow: "10px 10px 43px -22px rgba(0,0,0,0.75)",
              }}
              onClick={() => handleClickCard(res)}
            >
              <CardMedia
                component="div"
                sx={{
                  height:"120px",
                  pt: "100%",
                }}
                image={res.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" sx={{fontSize:"18px",fontWeight:"500"}}>
                  {res.title}
                </Typography>
                <Typography sx={{fontSize:"14px"}}>{res.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy</Button>
                <Button size="small">Add to cart</Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Products;
