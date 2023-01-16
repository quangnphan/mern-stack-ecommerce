import "./ShopAndChat.css";
import React from "react";
import { Typography, Container, Grid,  } from "@mui/material";
import SpecialistIcon from "../../images/specialist-icon.jfif"
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";

const ShopAndChat = () => {
  return (
    <div className="shop-container">
      <Container 
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "lg",
          flexGrow: 1,          
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            
        }}
        
      >
        <Grid container>
          <Grid xs={12} md={8} item spacing={12}>
            <Typography variant="h3" className="shop-title">
              Store. <span>The best way to buy the products you love.</span>
            </Typography>
          </Grid>

          <Grid xs={12} md={3} container>
            <Grid container item spacing={0} >

              <Grid container  columnSpacing={{xs:1, md:1}}>
                <Grid xs={2} md={2} >
                  <img alt="store-chat-specialist" src={SpecialistIcon} />
                </Grid>
                <Grid xs={10} md={10}>
                  <Typography gutterBottom variant="subtitle1">
                    Need shopping helps?
                  </Typography>
                  <Typography variant="body2">
                    <Link underline="none"  to={"/send"} >Ask a Specialist</Link>
                  </Typography>
                </Grid>
              </Grid>

              <Grid container columnSpacing={{xs:1, md:1}}>
                <Grid xs={2} md={2}>
                    <AppleIcon />
                </Grid>
                <Grid xs={10} md={10}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Visit an Apple Store
                  </Typography>
                  <Typography variant="body2">
                  <Link underline="none">Find one near you ></Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ShopAndChat;
