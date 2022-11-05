import React from 'react';
import { Box, Skeleton, Stack, Typography } from '@mui/material';
import { AppContext } from '../App';
import { useContext } from 'react';

import { Category } from '../components/Category';
import { Filter } from '../components/Filter';
import { CardGoods } from '../components/CardGoods';

export const GoodsList = () => {

  const {goodsItems, loading, selectCategory, selectFilter, onSelectCategory, onSelectFilter} = useContext(AppContext);

  return (
    <>
      <div className="filter__list">
        <Category currentCategory={selectCategory} getCategory={(category) => onSelectCategory(category)} />
        <Filter getFilter={(filter) => onSelectFilter(filter)} />
      </div>

      <div className="content">
        <Typography component="h2"
          sx={{
            fontFamily: 'Proxima Nova-b',
            fontSize: '32px',
          }}>
          Все пиццы
        </Typography>
        <div className="goods__list">
          {loading ? (
            [...Array(10)].map((__, idx) => (
              <Stack key={idx} spacing={1} sx={{ mt: "35px" }}>
                <Skeleton animation={"wave"} variant='circular' width={"260px"} height={"260px"} />
                <Skeleton animation={"wave"} variant='rounded' width={"260px"} height={"25px"} />
                <Skeleton animation={"wave"} variant='rounded' width={"260px"} height={"100px"} />
                <Box width={"100%"} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Skeleton animation={"wave"} variant='rounded' width={"70px"} height={"20px"} />
                  <Skeleton animation={"wave"} variant='rounded' width={"100px"} height={"30px"} />
                </Box>
              </Stack>
            ))
          ) : (
            (selectCategory === 0 ? goodsItems
              .sort((a, b) => selectFilter === "title" ? a[selectFilter].localeCompare(b[selectFilter]) :
                b[selectFilter] - a[selectFilter])
              : goodsItems.filter((item) => item.category === selectCategory))
              .map((item, idx) => (
                <CardGoods idx={idx} loading={loading} {...item} />
              ))
          )}

        </div>
      </div>
    </>
  )
}
