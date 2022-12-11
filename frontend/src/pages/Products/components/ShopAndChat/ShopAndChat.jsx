import "./ShopAndChat.css";
import React from "react";
import { Typography, Container, Grid,  } from "@mui/material";
import SpecialistIcon from "../../images/specialist-icon.jfif"
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "@mui/material";

const ShopAndChat = () => {
  return (
    <div className="shop-container">
      <Container
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 636,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        
      >
        <Grid container sx >
          <Grid xs={12} md={8} spacing={3}>
            <Typography variant="h3" className="shop-title">
              Store. <span>The best way to buy the products you love.</span>
            </Typography>
          </Grid>

          <Grid xs={12} md={4} container>
            <Grid xs md container  spacing={0} >

              <Grid container  columnSpacing={{xs:1, md:1}}>
                <Grid xs={2} md={2} >
                  <img alt="store-chat-specialist" src={SpecialistIcon} />
                </Grid>
                <Grid xs={10} md={10}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Need shopping helps?
                  </Typography>
                  <Typography variant="body2">
                    <Link underline="none" >Ask a Specialist</Link>
                  </Typography>
                </Grid>
              </Grid>

              <Grid xs container columnSpacing={{xs:1, md:1}}>
                <Grid xs={2} md={2}>
                    <AppleIcon />
                </Grid>
                <Grid xs={10} md={10}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Visit an Apple Store
                  </Typography>
                  <Typography variant="body2">
                  <Link underline="none" >Find one near you ></Link>
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
