import { Box, Button, createTheme, styled, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { Header } from './components/Header';
import { useState } from 'react';

function App() {

  const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.root.color,
    height: theme.root.height,
    fontFamily: theme.root.fontFamily,
    textTransform: theme.root.textTransform,
    backgroundColor: theme.root.backgroundColor,
    borderRadius: theme.root.borderRadius,
    '&:hover': {
      color: theme.hover.color,
      backgroundColor: theme.hover.backgroundColor,
    }
  }));
  const theme = createTheme({
    root: {
      color: '#2C2C2C',
      height: '35px',
      fontFamily: 'Proxima Nova-b',
      textTransform: 'capitalize',
      backgroundColor: '#F9F9F9',
      borderRadius: '30px',
    },
    hover: {
      backgroundColor: '#282828',
      color: 'white',
    }
  });

  const [openFilter, setOpenFilter] = useState(false);
  const [selectFilter, setSelectFilter] = useState('популярности');
  const [selectButton, setSelectButton] = useState('Всё');

  const changeSelect = (e) => {
    setSelectFilter(e.target.textContent);
    setOpenFilter(!openFilter);
  }

  const changeSelectButton = (e) => {
    setSelectButton(e.target.textContent)
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
              <ThemeProvider theme={theme}>
                <CustomButton
                  onClick={(e) => changeSelectButton(e)}
                  className={`${selectButton === 'Всё' ? "filter_active" : null}`}
                  variant='contained' >
                  Всё
                </CustomButton>

                <CustomButton
                  onClick={(e) => changeSelectButton(e)}
                  className={`${selectButton === 'Мясные' ? "filter_active" : null}`}
                  variant='contained' >
                  Мясные
                </CustomButton>

                <CustomButton
                  onClick={(e) => changeSelectButton(e)}
                  className={`${selectButton === 'Вегатарианская' ? "filter_active" : null}`}
                  variant='contained' >
                  Вегатарианская
                </CustomButton>

                <CustomButton
                  onClick={(e) => changeSelectButton(e)}
                  className={`${selectButton === 'Гриль' ? "filter_active" : null}`}
                  variant='contained' >
                  Гриль
                </CustomButton>

                <CustomButton
                  onClick={(e) => changeSelectButton(e)}
                  className={`${selectButton === 'Острые' ? "filter_active" : null}`}
                  variant='contained' >
                  Острые
                </CustomButton>

                <CustomButton
                  onClick={(e) => changeSelectButton(e)}
                  className={`${selectButton === 'Закрытые' ? "filter_active" : null}`}
                  variant='contained' >
                  Закрытые
                </CustomButton>
              </ThemeProvider>
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
