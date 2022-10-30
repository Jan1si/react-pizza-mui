import React from "react";
import styles from "./Filter.module.scss";
import { useState } from "react";

export const Filter = ({getFilter}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("популярности");

  const filters = [
    {
      value: "популярности",
      filter: "rating",
    },
    {
      value: "по цене",
      filter: "price",
    },
    {
      value: "по алфавиту",
      filter: "title",
    }
  ];

  const onClickSelect = (value, filter) => {
    getFilter(filter);
    setSelectedFilter(value);
    setOpenFilter((prev) => !prev);
  };

  console.log(filters);

  return (
    <div className={styles.dropdown__btn}>
      <img
        className={`${styles.dropdown__arrow} ${
          openFilter ? styles.rotate__arrow : null
        }`}
        src="./img/arrow.svg"
        alt="Arrow"
      />
      <p className={styles.label__filter}>Сортировка по:</p>
      <p
        onClick={() => setOpenFilter((prev) => !prev)}
        className={styles.select__filter}
      >
        {selectedFilter}
      </p>
      <ul
        className={`${styles.dropdown__menu} ${
          openFilter ? styles.dropdown__menu_active : null
        }`}
      >
        {filters.map((item, idx) => (
          <li
            key={idx}
            onClick={() => onClickSelect(item.value, item.filter)}
            className={`${
              selectedFilter === idx ? styles.current__select : null
            }`}
          >
            {item.value}
            
          </li>
        ))}
      </ul>
    </div>
  );
};
