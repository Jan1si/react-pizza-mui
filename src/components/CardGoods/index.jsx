import React from "react";
import { Card, CardMedia, ThemeProvider, Typography } from "@mui/material";

import { CardBtnSize, themeCardBtnSize, CardBtnBuy, themeCardBtnBuy } from "../../themes/CardBtns";


export const CardGoods = () => {

  return (
    <Card className="card" sx={{ boxShadow: "unset" }}>
      <CardMedia component="img" height="260px" width="260px"
        image="https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_292x292.png"
        sx={{ objectFit: "contain",}}
      />
      <Typography variant="h5" component="p"
        sx={{
          mt: "5px",
          fontFamily: "Proxima Nova-eb",
          textAlign: "center",
        }}
      >
        Чизбургер-пицца
      </Typography>

      <div className="card__button_group">
        <div className="buttons__row">
          <ThemeProvider theme={themeCardBtnSize}>

            <CardBtnSize variant="contained" sx={{ width: "130px" }}>
              тонкое
            </CardBtnSize>

            <CardBtnSize variant="contained" sx={{ width: "130px" }}>
              традиционное
            </CardBtnSize>

          </ThemeProvider>
        </div>
        <div className="buttons__row buttons__size">
          <ThemeProvider theme={themeCardBtnSize}>
            <CardBtnSize variant="contained" sx={{ width: "86px" }}>
              26 см
            </CardBtnSize>

            <CardBtnSize variant="contained" sx={{ width: "86px" }}>
              30 см.
            </CardBtnSize>

            <CardBtnSize variant="contained" sx={{ width: "86px" }}>
              40 см.
            </CardBtnSize>
          </ThemeProvider>
        </div>
      </div>

      <div className="card__button_buy">

        <Typography component="p"sx={{fontFamily: "Proxima Nova-b",fontSize: "22px", }}>
          от 395 р.
        </Typography>

        <ThemeProvider theme={themeCardBtnBuy}>
          <CardBtnBuy>
            <svg
              className="plus__icon"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
            </svg>
            Добавить
          </CardBtnBuy>
        </ThemeProvider>
      </div>
    </Card>
  );
};
