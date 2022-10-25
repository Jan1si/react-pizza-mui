import React from "react";

export const Filter = ({
  openFilter,
  setOpenFilter,
  selectFilter,
  changeSelect,
}) => {
  return (
    <div className="dropdown__btn">
      <img
        className={`dropdown__arrow ${openFilter ? "rotate__arrow" : null}`}
        src="./img/arrow.svg"
        alt="Arrow"
      />
      <p className="label__filter">Сортировка по:</p>
      <p onClick={setOpenFilter} className="select__filter">
        {selectFilter}
      </p>
      <ul
        className={`dropdown__menu ${
          openFilter ? "dropdown__menu_active" : null
        }`}
      >
        <li
          onClick={changeSelect}
          className={`${
            selectFilter === "популярности" ? "current__select" : null
          }`}
        >
          популярности
        </li>
        <li
          onClick={changeSelect}
          className={`${selectFilter === "по цене" ? "current__select" : null}`}
        >
          по цене
        </li>
        <li
          onClick={changeSelect}
          className={`${
            selectFilter === "по алфавиту" ? "current__select" : null
          }`}
        >
          по алфавиту
        </li>
      </ul>
    </div>
  );
};
