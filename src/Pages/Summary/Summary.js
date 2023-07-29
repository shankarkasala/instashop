import { Card, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./summary.css";
import { useNavigate } from "react-router-dom";
function Summary() {
  const navigate = useNavigate();

  const [order, setOrder] = useState(false);
  const [procesing, setProcessing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOrder(true);
    }, 6000);
    setTimeout(() => {
      setProcessing(true);
    }, 2000);
  }, []);

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="order">
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          padding: "8px",
          height: "325px",
          width: "750px",
          textAlign: "center",
        }}
      >
        {order ? (
          <Container>
            <CheckCircleIcon sx={{ fontSize: "64px", color: "green" }} />
            <Typography>You have successfully placed your order!!</Typography>
            <div onClick={handleBack}>
              <Typography sx={{ color: "blueviolet", cursor: "pointer" }}>
                go back
              </Typography>
            </div>
          </Container>
        ) : procesing ? (
          <Typography variant="h5">Placing your order...</Typography>
        ) : (
          <Typography variant="h4">Hang on...</Typography>
        )}
      </Card>
    </div>
  );
}

export default Summary;
