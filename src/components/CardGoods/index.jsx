import React from "react";
import { Card, CardMedia, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import {
  CardBtnSize,
  themeCardBtnSize,
  CardBtnBuy,
  themeCardBtnBuy,
  themeCardBtnBuyToCount
} from "../../themes/CardBtns";
import styles from './CardGoods.module.scss';

export const CardGoods = ({title, imageUrl, price, types, sizes}) => {
  const [selectWidth, setSelectWidth] = useState(0);
  const [selectSize, setSelectSize] = useState(0);
  const [count, setCount] = useState(0);
  const widthPizza = ["тонкое", "традиционное"]; 

  return (
    <Card className={styles.card} sx={{ boxShadow: "unset" }}>
      <CardMedia
        component="img"
        height="260px"
        width="260px"
        image={imageUrl}
        sx={{ objectFit: "contain" }}
      />
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontSize: "20px",
          mt: "5px",
          fontFamily: "Proxima Nova-eb",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <div className={styles.card__button_group}>
        <div className={styles.buttons__row}>
          <ThemeProvider theme={themeCardBtnSize}>
            {types.map((item, idx) => (
              <CardBtnSize onClick={() => setSelectWidth(item)} key={idx} className={`${selectWidth === item ? styles._active : null}`} variant="contained" sx={{ width: "100%" }}>
                {widthPizza[item]}
              </CardBtnSize>
            ))}
          </ThemeProvider>
        </div>
        <div className={`${styles.buttons__row} ${styles.buttons__size}`}>
          <ThemeProvider theme={themeCardBtnSize}>
            {sizes.map((item, idx) => (
              <CardBtnSize onClick={() => setSelectSize(idx)} key={idx} className={`${selectSize === idx ?  styles._active : null}`} variant="contained" sx={{ width: "100%" }}>
                {item} см
              </CardBtnSize>
            ))}
          </ThemeProvider>
        </div>
      </div>

      <div className={styles.card__button_buy}>
        <Typography
          component="p"
          sx={{ fontFamily: "Proxima Nova-b", fontSize: "22px" }}
        >
          от {price} р.
        </Typography>

        <ThemeProvider theme={count > 0 ? themeCardBtnBuyToCount : themeCardBtnBuy}>
          <CardBtnBuy onClick={() => setCount((prev) => prev + 1)} className={styles.buttonBuy}>
            <svg
              className={`${count > 0 ? styles.plus__icon_count : styles.plus__icon}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
            </svg>
            Добавить
            {count > 0 ? (
              <div className={styles.count}>
                {count}
              </div>
            ): null}
            
          </CardBtnBuy>
        </ThemeProvider>
      </div>
    </Card>
  );
};
