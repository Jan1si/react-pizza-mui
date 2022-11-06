import React from 'react'
import {  Box, ThemeProvider, Typography } from '@mui/material';
import { CountBtn, themeCountBtn } from '../../themes/CountBtn';
import { DeleteBtn, themeDeleteBtn } from '../../themes/DeleteBtn';
import styles from './ItemCart.moduel.scss';

export const ItemCart = () => {
  return (
    <div className={styles.cart__item}>
    <Box sx={{display: "flex", alignItems: "center"}}>
      <img width={80} height={80} src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg" alt="Pizza" />
      <Box sx={{ml: "15px"}}>
        <Typography variant="h5" component="h5" sx={{
          fontFamily: 'Proxima Nova-b',
          fontSize: "22px",
        }}>
          Сырный цыпленок
        </Typography>
        <Typography component="p" sx={{
          fontFamily: 'Proxima Nova',
          fontSize: "18px",
          color: "#8D8D8D",
        }}>
          тонкое тесто, 26 см.
        </Typography>
      </Box>
    </Box>
    <div className="count__block">
      <ThemeProvider theme={themeCountBtn}>
        <CountBtn sx={{width: "32px", height: "32px"}}>
          <img src="./img/minus.svg" alt="minus" />
        </CountBtn>
      </ThemeProvider>

      <Typography variant="h4" component="h4" sx={{
        fontFamily: 'Proxima Nova-b',
        fontSize: "25px",
        margin: "0 14px",
      }}>
        0
      </Typography>

      <ThemeProvider theme={themeCountBtn}>
        <CountBtn sx={{width: "32px", height: "32px"}}>
          <img src="./img/plus.svg" alt="plus" />
        </CountBtn>
      </ThemeProvider>
    </div>
    <Typography variant='h5' component='h5'sx={{
        fontFamily: 'Proxima Nova-b',
        fontSize: "25px",
      }}>
      225 р.
    </Typography>
    <ThemeProvider theme={themeDeleteBtn}>
      <DeleteBtn sx={{width: "32px", height: "32px"}}>
        <img src="./img/delete.svg" alt="delete" />
      </DeleteBtn>
    </ThemeProvider>
  </div>
  )
}
