import React from 'react'
import {ThemeProvider} from '@mui/material';
import { CategoryBtn, themeCategoryBtn } from '../../themes/CategotyBtn';

export const Category = ({selectButton, changeSelectButton}) => {


  return (
    <div className="filter__buttons_group">
        <ThemeProvider theme={themeCategoryBtn}>
        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Всё' ? "filter_active" : null}`}
            variant='contained' >
            Всё
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Мясные' ? "filter_active" : null}`}
            variant='contained' >
            Мясные
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Вегатарианская' ? "filter_active" : null}`}
            variant='contained' >
            Вегатарианская
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Гриль' ? "filter_active" : null}`}
            variant='contained' >
            Гриль
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Острые' ? "filter_active" : null}`}
            variant='contained' >
            Острые
        </CategoryBtn>

        <CategoryBtn
            onClick={changeSelectButton}
            className={`${selectButton === 'Закрытые' ? "filter_active" : null}`}
            variant='contained' >
            Закрытые
        </CategoryBtn>
    </ThemeProvider>
    </div>
    
  )
}
