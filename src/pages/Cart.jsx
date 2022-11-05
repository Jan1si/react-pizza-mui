import React from 'react';
import {  Typography } from '@mui/material';


export const Cart = () => {
  return (
    <>
      <div className="content">
        <Typography component="h2"
          sx={{
            fontFamily: 'Proxima Nova-b',
            fontSize: '32px',
          }}>
          Корзина
        </Typography>
        <div className="goods__list">

        </div>
      </div>
    </>

  )
}
