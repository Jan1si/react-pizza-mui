import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import { Header } from './components/Header';
import { useState } from 'react';

function App() {

  const [openFilter, setOpenFilter] = useState(false);
  const [selectFilter, setSelectFilter] = useState('популярности')

  const changeSelect = (e) => {
    setSelectFilter(e.target.textContent);
    setOpenFilter(!openFilter);
  }

  return (
    <div className="App">
      <Container maxWidth="lg" sx={{
        backgroundColor: 'white',
        margin: '50px auto',
        borderRadius: '10px',
      }}>
        <Header />
        <Box sx={{
          padding: '0px 50px',
          marginTop: '40px',
        }}>
          <div className="filter__list">

            <div className="buttons__group">
              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                height: '35px',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Всё
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                height: '35px',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Мясные
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                height: '35px',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Вегетарианская
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                height: '35px',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Гриль
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                height: '35px',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Острые
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                height: '35px',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Закрытые
              </Button>
            </div>

            <div className="dropdown__btn">
              <img className={`dropdown__arrow ${openFilter ? "rotate__arrow" : null}`} src="./img/arrow.svg" alt="Arrow" />
              <p className="label__filter">Сортировка по:</p>
              <p onClick={() => setOpenFilter(!openFilter)} className="select__filter">
                {selectFilter}
              </p>
              <ul className={`dropdown__menu ${openFilter ? "dropdown__menu_active" : null}`}>
                <li
                  onClick={(e) => changeSelect(e)}
                  className={`${selectFilter === "популярности" ? "current__select" : null}`}>
                  популярности
                </li>
                <li
                  onClick={(e) => changeSelect(e)}
                  className={`${selectFilter === "по цене" ? "current__select" : null}`}
                >по цене</li>
                <li
                  onClick={(e) => changeSelect(e)}
                  className={`${selectFilter === "по алфавиту" ? "current__select" : null}`}
                >по алфавиту
                </li>
              </ul>
            </div>

          </div>
          <div className="goods__list">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </Box>
      </Container>


    </div>
  );
}

export default App;
