import React from 'react';
import {  Box, Typography } from '@mui/material';
import { ItemCart } from '../../components/ItemCart';
import styles from './Cart.module.scss';

export const Cart = () => {
  return (
    <>
      <div className="content">
       <div className={styles.header__cart}>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <img src="./img/cart__icon_black.svg" alt="Cart" />
            <Typography component="h2"
              sx={{
                fontFamily: 'Proxima Nova-b',
                fontSize: '32px',
                marginLeft: "20px",
              }}>
              Корзина
            </Typography>
          </Box>
          <Box sx={{display: "flex", alignItems: "center", cursor: "pointer"}}>
            <img src="./img/delete__all.svg" alt="Cart" />
            <Typography component="h2"
              sx={{
                fontFamily: 'Proxima Nova',
                fontSize: '16px',
                marginLeft: "5px",
                color: "#B6B6B6",
              }}>
              Отчистить корзину
            </Typography>
          </Box>
        </div>
        <div className={styles.cart__list}>
          <ItemCart />
        </div>
      </div>
    </>

  )
}
