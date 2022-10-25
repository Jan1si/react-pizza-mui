import React from 'react'
import {ThemeProvider} from '@mui/material';
import { CategoryBtn, themeCategoryBtn } from '../../themes/CategotyBtn';
import styles from './Category.module.scss';

export const Category = ({selectButton, changeSelectButton}) => {

  return (
    <div className={styles.category__buttons_group}>
        <ThemeProvider theme={themeCategoryBtn}>
        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Всё' ? styles.category_active : null}`}
            variant='contained' >
            Всё
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Мясные' ? styles.category_active : null}`}
            variant='contained' >
            Мясные
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Вегатарианская' ? styles.category_active : null}`}
            variant='contained' >
            Вегатарианская
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Гриль' ? styles.category_active : null}`}
            variant='contained' >
            Гриль
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Острые' ? styles.category_active : null}`}
            variant='contained' >
            Острые
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Закрытые' ? styles.category_active : null}`}
            variant='contained' >
            Закрытые
        </CategoryBtn>
        
    </ThemeProvider>
    </div>
    
  )
}
