import {
  Card,
  Container,
  LinearProgress,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./summary.css";
import { useNavigate } from "react-router-dom";
function Summary() {
  const navigate = useNavigate();

  const [order, setOrder] = useState(false);
  const [procesing, setProcessing] = useState(false);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOrder(true);
    }, 6000);
    setTimeout(() => {
      setProcessing(true);
    }, 2000);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 350);

    return () => {
      clearInterval(timer);
    };
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
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5">Placing your order...</Typography>
            <Box sx={{ width: "500px" ,marginTop:"8px"}}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </Container>
        ) : (
          <Typography variant="h4">Hang on...</Typography>
        )}
      </Card>
    </div>
  );
}

export default Summary;
