import {
  Box,
  Button,
  Card,
  CardMedia,
  createTheme,
  styled,
  ThemeProvider,
  Typography
} from '@mui/material';
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


  const CardButton = styled(Button)(({ theme }) => ({
    color: theme.root.color,
    borderRadius: theme.root.borderRadius,
    backgroundColor: theme.root.backgroundColor,
    textTransform: theme.root.textTransform,
    fontFamily: theme.root.fontFamily,
    boxShadow: theme.root.boxShadow,
    '&:hover': {
      backgroundColor: theme.hover.backgroundColor,
      boxShadow: theme.hover.boxShadow,
    }
  }));

  const themeCardBtn = createTheme({
    root: {
      color: "#2C2C2C",
      borderRadius: '5px',
      backgroundColor: '#ffffff5d',
      textTransform: 'lowercase',
      fontFamily: 'Proxima Nova-b',
      boxShadow: 'unset',
    },
    hover: {
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px #f5f5f5',
    }
  });

  const CardButtonBuy = styled(Button)(({ theme }) => ({
    backgroundColor: theme.root.backgroundColor,
    boxShadow: theme.root.boxShadow,
    borderRadius: theme.root.borderRadius,
    fontFamily: theme.root.fontFamily,
    textTransform: theme.root.textTransform,
    color: theme.root.color,
    padding: theme.root.padding,
    '&:hover': {
      boxShadow: theme.hover.boxShadow,
      backgroundColor: theme.hover.backgroundColor,
    }
  }))

  const themeCardBuy = createTheme({
    root: {
      backgroundColor: '#FE5F1E',
      boxShadow: 'unset',
      borderRadius: '30px',
      fontFamily: 'Proxima Nova-b',
      textTransform: 'capitalize',
      color: '#FFFFFF',
      padding: '10px 18px',
    },
    hover: {
      boxShadow: 'unset',
      backgroundColor: '#FE5F1E',
    }
  })

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

            <div className="filter__buttons_group">
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
          <div className="content">
            <Typography component="h2"
              sx={{
                fontFamily: 'Proxima Nova-b',
                fontSize: '32px',
              }}>
              Все пиццы
            </Typography>
            <div className="goods__list">

            <Card className="card" sx={{ boxShadow: 'unset',}}>
              <CardMedia
                component="img"
                height="260px"
                width="260px"
                image="https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_292x292.png"
                sx={{
                  objectFit: "contain",
                }}
              />
              <Typography variant='h5' component="p"
                sx={{
                  mt: '5px',
                  fontFamily: 'Proxima Nova-eb',
                  textAlign: 'center',
                }}>
                Чизбургер-пицца
              </Typography>


              <div className="card__button_group">
                <div className="buttons__row">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      тонкое
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      традиционное
                    </CardButton>

                  </ThemeProvider>

                </div>
                <div className="buttons__row buttons__size">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      26 см
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      30 см.
                    </CardButton>
                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      40 см.
                    </CardButton>

                  </ThemeProvider>

                </div>
              </div>

              <div className="card__button_buy">
                <Typography component="p" sx={{
                  fontFamily: 'Proxima Nova-b',
                  fontSize: '22px',
                }}>
                  от 395 р.
                </Typography>


                <ThemeProvider theme={themeCardBuy}>
                  <CardButtonBuy>
                    <svg className='plus__icon' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                      </svg>
                    Добавить
                  </CardButtonBuy>
                </ThemeProvider>

              </div>

            </Card>

            <Card className="card" sx={{ boxShadow: 'unset',}}>
              <CardMedia
                component="img"
                height="260px"
                width="260px"
                image="https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_292x292.png"
                sx={{
                  objectFit: "contain",
                }}
              />
              <Typography variant='h5' component="p"
                sx={{
                  mt: '5px',
                  fontFamily: 'Proxima Nova-eb',
                  textAlign: 'center',
                }}>
                Чизбургер-пицца
              </Typography>


              <div className="card__button_group">
                <div className="buttons__row">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      тонкое
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      традиционное
                    </CardButton>

                  </ThemeProvider>

                </div>
                <div className="buttons__row buttons__size">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      26 см
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      30 см.
                    </CardButton>
                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      40 см.
                    </CardButton>

                  </ThemeProvider>

                </div>
              </div>

              <div className="card__button_buy">
                <Typography component="p" sx={{
                  fontFamily: 'Proxima Nova-b',
                  fontSize: '22px',
                }}>
                  от 395 р.
                </Typography>


                <ThemeProvider theme={themeCardBuy}>
                  <CardButtonBuy>
                    <svg className='plus__icon' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                      </svg>
                    Добавить
                  </CardButtonBuy>
                </ThemeProvider>

              </div>

            </Card>

            <Card className="card" sx={{ boxShadow: 'unset',}}>
              <CardMedia
                component="img"
                height="260px"
                width="260px"
                image="https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_292x292.png"
                sx={{
                  objectFit: "contain",
                }}
              />
              <Typography variant='h5' component="p"
                sx={{
                  mt: '5px',
                  fontFamily: 'Proxima Nova-eb',
                  textAlign: 'center',
                }}>
                Чизбургер-пицца
              </Typography>


              <div className="card__button_group">
                <div className="buttons__row">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      тонкое
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      традиционное
                    </CardButton>

                  </ThemeProvider>

                </div>
                <div className="buttons__row buttons__size">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      26 см
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      30 см.
                    </CardButton>
                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      40 см.
                    </CardButton>

                  </ThemeProvider>

                </div>
              </div>

              <div className="card__button_buy">
                <Typography component="p" sx={{
                  fontFamily: 'Proxima Nova-b',
                  fontSize: '22px',
                }}>
                  от 395 р.
                </Typography>


                <ThemeProvider theme={themeCardBuy}>
                  <CardButtonBuy>
                    <svg className='plus__icon' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                      </svg>
                    Добавить
                  </CardButtonBuy>
                </ThemeProvider>

              </div>

            </Card>

            <Card className="card" sx={{ boxShadow: 'unset',}}>
              <CardMedia
                component="img"
                height="260px"
                width="260px"
                image="https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_292x292.png"
                sx={{
                  objectFit: "contain",
                }}
              />
              <Typography variant='h5' component="p"
                sx={{
                  mt: '5px',
                  fontFamily: 'Proxima Nova-eb',
                  textAlign: 'center',
                }}>
                Чизбургер-пицца
              </Typography>


              <div className="card__button_group">
                <div className="buttons__row">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      тонкое
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      традиционное
                    </CardButton>

                  </ThemeProvider>

                </div>
                <div className="buttons__row buttons__size">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      26 см
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      30 см.
                    </CardButton>
                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      40 см.
                    </CardButton>

                  </ThemeProvider>

                </div>
              </div>

              <div className="card__button_buy">
                <Typography component="p" sx={{
                  fontFamily: 'Proxima Nova-b',
                  fontSize: '22px',
                }}>
                  от 395 р.
                </Typography>


                <ThemeProvider theme={themeCardBuy}>
                  <CardButtonBuy>
                    <svg className='plus__icon' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                      </svg>
                    Добавить
                  </CardButtonBuy>
                </ThemeProvider>

              </div>

            </Card>

            <Card className="card" sx={{ boxShadow: 'unset',}}>
              <CardMedia
                component="img"
                height="260px"
                width="260px"
                image="https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_292x292.png"
                sx={{
                  objectFit: "contain",
                }}
              />
              <Typography variant='h5' component="p"
                sx={{
                  mt: '5px',
                  fontFamily: 'Proxima Nova-eb',
                  textAlign: 'center',
                }}>
                Чизбургер-пицца
              </Typography>


              <div className="card__button_group">
                <div className="buttons__row">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      тонкое
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      традиционное
                    </CardButton>

                  </ThemeProvider>

                </div>
                <div className="buttons__row buttons__size">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      26 см
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      30 см.
                    </CardButton>
                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      40 см.
                    </CardButton>

                  </ThemeProvider>

                </div>
              </div>

              <div className="card__button_buy">
                <Typography component="p" sx={{
                  fontFamily: 'Proxima Nova-b',
                  fontSize: '22px',
                }}>
                  от 395 р.
                </Typography>


                <ThemeProvider theme={themeCardBuy}>
                  <CardButtonBuy>
                    <svg className='plus__icon' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                      </svg>
                    Добавить
                  </CardButtonBuy>
                </ThemeProvider>

              </div>

            </Card>

            <Card className="card" sx={{ boxShadow: 'unset',}}>
              <CardMedia
                component="img"
                height="260px"
                width="260px"
                image="https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_292x292.png"
                sx={{
                  objectFit: "contain",
                }}
              />
              <Typography variant='h5' component="p"
                sx={{
                  mt: '5px',
                  fontFamily: 'Proxima Nova-eb',
                  textAlign: 'center',
                }}>
                Чизбургер-пицца
              </Typography>


              <div className="card__button_group">
                <div className="buttons__row">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      тонкое
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: '130px' }}>
                      традиционное
                    </CardButton>

                  </ThemeProvider>

                </div>
                <div className="buttons__row buttons__size">

                  <ThemeProvider theme={themeCardBtn} >

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      26 см
                    </CardButton>

                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      30 см.
                    </CardButton>
                    <CardButton variant='contained' sx={{ width: "86px", }}>
                      40 см.
                    </CardButton>

                  </ThemeProvider>

                </div>
              </div>

              <div className="card__button_buy">
                <Typography component="p" sx={{
                  fontFamily: 'Proxima Nova-b',
                  fontSize: '22px',
                }}>
                  от 395 р.
                </Typography>


                <ThemeProvider theme={themeCardBuy}>
                  <CardButtonBuy>
                    <svg className='plus__icon' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"/>
                      </svg>
                    Добавить
                  </CardButtonBuy>
                </ThemeProvider>

              </div>

            </Card>


            </div>
          </div>
        </Box>
      </Container>


    </div>
  );
}

export default App;
