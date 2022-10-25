import React from "react";
import styles from './Filter.module.scss';

export const Filter = ({
  openFilter,
  setOpenFilter,
  selectFilter,
  changeSelect,
}) => {
  return (
    <div className={styles.dropdown__btn}>
      <img
        className={`${styles.dropdown__arrow} ${openFilter ? styles.rotate__arrow : null}`}
        src="./img/arrow.svg"
        alt="Arrow"
      />
      <p className={styles.label__filter}>Сортировка по:</p>
      <p onClick={setOpenFilter} className={styles.select__filter}>
        {selectFilter}
      </p>
      <ul
        className={`${styles.dropdown__menu} ${
          openFilter ? styles.dropdown__menu_active : null
        }`}
      >
        <li
          onClick={changeSelect}
          className={`${
            selectFilter === "популярности" ? styles.current__select : null
          }`}
        >
          популярности
        </li>
        <li
          onClick={changeSelect}
          className={`${selectFilter === "по цене" ? styles.current__select : null}`}
        >
          по цене
        </li>
        <li
          onClick={changeSelect}
          className={`${
            selectFilter === "по алфавиту" ? styles.current__select : null
          }`}
        >
          по алфавиту
        </li>
      </ul>
    </div>
  );
};
