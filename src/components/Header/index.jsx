import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <Box
      sx={{
        padding: "0px 10px",
      }}
    >
      <AppBar
        position={"static"}
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #F6F6F6",
          backgroundColor: "white",
        }}
      >
        <Toolbar className={styles.navbar}>
          <Link to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src="./img/logo-pizza.svg" alt="" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: "17px",
                }}
              >
                <Typography
                  variant={"h5"}
                  component={"h1"}
                  sx={{
                    color: "black",
                    fontFamily: "Proxima Nova-eb",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    lineHeight: "20px",
                  }}
                >
                  React Pizza
                </Typography>
                <Typography
                  sx={{
                    color: "#7B7B7B",
                    fontSize: "16px",
                    fontFamily: "Proxima Nova",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  самая вкусная пицца во вселенной
                </Typography>
              </Box>
            </Box>
          </Link>
          <Link to="/cart">
            <Button variante="contained" className={styles.custom__btn}>
              <div className={styles.total__price}>
                <p>520 р.</p>
              </div>
              <div className={styles.len__product}>
                <img src="./img/cart__icon_white.svg" alt="" />
                <p>3</p>
              </div>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
