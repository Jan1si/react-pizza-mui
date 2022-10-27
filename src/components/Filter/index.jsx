import React from "react";
import styles from './Filter.module.scss';
import { useState } from "react";

export const Filter = () => {

  const [openFilter, setOpenFilter] = useState(false);
  const [selectFilter, setSelectFilter] = useState(0);

  const filters = ["популярности", "по цене", " по алфавиту"];

  const onClickSelect = (idx) => {
    setSelectFilter(idx);
    setOpenFilter((prev) => !prev);
  }

  return (
    <div className={styles.dropdown__btn}>
      <img
        className={`${styles.dropdown__arrow} ${openFilter ? styles.rotate__arrow : null}`}
        src="./img/arrow.svg"
        alt="Arrow"
      />
      <p className={styles.label__filter}>Сортировка по:</p>
      <p onClick={() => setOpenFilter((prev) => !prev)} className={styles.select__filter}>
        {filters[selectFilter]}
      </p>
      <ul className={`${styles.dropdown__menu} ${openFilter ? styles.dropdown__menu_active : null}`}>

        {filters.map((item, idx) => (
          <li key={idx} onClick={() => onClickSelect(idx)} className={`${selectFilter === idx ? styles.current__select : null}`}>
            {item}
          </li>
        ))}

      </ul>
    </div>
  );
};
