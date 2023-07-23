import React from "react";
import { CircularProgress, Container } from "@mui/material";

const Loading = () => {
  return (
    <Container maxWidth="lg" style={{ minHeight: "50vh", textAlign: "center" }}>
      <p style={{ margin: "50px 0", color: "darkgray" }}>
        Please hang tight, it may take some time
      </p>
      <CircularProgress />
    </Container>
  );
};

export default Loading;
