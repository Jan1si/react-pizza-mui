import { Box, Button, Menu, MenuItem, } from '@mui/material';
import { Container } from '@mui/system';
import { Header } from './components/Header';

function App() {

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
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Всё
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Мясные
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Вегетарианская
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Гриль
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Острые
              </Button>

              <Button className="filter_active" variant='contained' sx={{
                color: '#2C2C2C',
                fontFamily: 'Proxima Nova-b',
                textTransform: 'capitalize',
                backgroundColor: '#F9F9F9',
                borderRadius: '30px',
              }}>
                Закрытые
              </Button>
            </div>

            <div className="dropdown__btn">
              <Button variant='text' sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
                <img src="./img/arrow.svg" alt="Arrow" />
                <p clasName="label__filter">Сортировка по:</p>
                <p className="select__filter">популярности</p>
              </Button>

              <Menu>
                <MenuItem>популярности</MenuItem>
                <MenuItem>по цене</MenuItem>
                <MenuItem>по алфавиту</MenuItem>
              </Menu>
            </div>

          </div>
          <div className="goods__list"></div>
        </Box>
      </Container>


    </div>
  );
}

export default App;
