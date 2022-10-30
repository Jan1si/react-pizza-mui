import React from 'react'
import { ThemeProvider } from '@mui/material';
import { CategoryBtn, themeCategoryBtn } from '../../themes/CategotyBtn';
import styles from './Category.module.scss';


export const Category = ({currentCategory, getCategory}) => {

    const categories = ["Все", "Мясные", "Вегатарианская", "Гриль", "Острые", "Закрытые"];

    return (
        <div className={styles.category__buttons_group}>
            <ThemeProvider theme={themeCategoryBtn}>
                {categories.map((item, idx) => (
                    <CategoryBtn
                        key={idx}
                        onClick={() => {getCategory(idx)}}
                        className={`${currentCategory=== idx ? styles.category_active : null}`}
                        variant='contained' >
                        {item}
                    </CategoryBtn>
                ))}
            </ThemeProvider>
        </div>

    )
}
