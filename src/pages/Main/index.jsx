import React from 'react';
import { Typography } from '@mui/material';
import { AppContext } from '../../App';
import { useContext } from 'react';

import { Category } from '../../components/Category';
import { Filter } from '../../components/Filter';
import { CardGoods } from '../../components/CardGoods';
import { SkeletonCard } from '../../components/CardGoods/SkeletonCard';

import styles from './Main.module.scss';

export const Main = () => {

  const {goodsItems, loading, selectCategory, selectFilter, onSelectCategory, onSelectFilter} = useContext(AppContext);

  return (
    <>
      <div className={styles.filter__list}>
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
        <div className={styles.goods__list}>
          {loading ? (
            [...Array(10)].map((__, idx) => (
              <SkeletonCard  idx={idx} />
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
