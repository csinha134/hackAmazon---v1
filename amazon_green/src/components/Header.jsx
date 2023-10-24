import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png"; // Import the banner image

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    backgroundRepeat:"no-repeat",
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(8),
    backgroundImage: `url(${banner})`, // Set the background image property
    backgroundSize: "cover", // You can adjust this to control how the image covers the box
    backgroundPosition: "center", // You can adjust this to control the position of the image
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));
  
  return (
    <CustomBox component="header">
      <br></br>
      <BoxText component="section">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "black",
          }}
        >
          Nurturing Nature, Sustaining Life.
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "green",
          }}
        >
          "Turning Trash into Treasure, One Bin at a Time."
        </Typography>

        <Box>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#14192d",
              textDecoration: "none",
              color: "inherit",
              "&&:hover": {
                backgroundColor: "#343a55",
              },
              "&&:focus": {
                backgroundColor: "#343a55",
              },
            }}
          >
            <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
              Recycle Now
            </a>
          </Button>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#14192d",
              textDecoration: "none",
              color: "inherit",
              "&&:hover": {
                backgroundColor: "#343a55",
              },
              "&&:focus": {
                backgroundColor: "#343a55",
              },
            }}
          >
            <a href="/sellform" style={{ textDecoration: 'none', color: 'white' }}>
              Sell Now
            </a>
          </Button>
        </Box>
      </BoxText>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "30px",
            alignSelf: "center",
          },
          [theme.breakpoints.up("md")]: {
            flex: "2",
            alignSelf: "flex-end",
          },
        })}
      >
        <img
          src={banner}
          alt="headerImg"
          style={{
            width: "100%",
            marginTop: -100,
          }}
        />
      </Box>
    </CustomBox>
  );
};

export default Header;
