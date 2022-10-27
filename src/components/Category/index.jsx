import React from 'react'
import { ThemeProvider } from '@mui/material';
import { CategoryBtn, themeCategoryBtn } from '../../themes/CategotyBtn';
import { useState } from 'react';
import styles from './Category.module.scss';

export const Category = () => {

    const [selectButton, setSelectButton] = useState(0);
    const categories = ["Все", "Мясные", "Вегатарианская", "Гриль", "Острые", "Закрытые"];

    return (
        <div className={styles.category__buttons_group}>
            <ThemeProvider theme={themeCategoryBtn}>
                {categories.map((item, idx) => (
                    <CategoryBtn
                        key={idx}
                        onClick={() => setSelectButton(idx)}
                        className={`${selectButton === idx ? styles.category_active : null}`}
                        variant='contained' >
                        {item}
                    </CategoryBtn>
                ))}
            </ThemeProvider>
        </div>

    )
}
