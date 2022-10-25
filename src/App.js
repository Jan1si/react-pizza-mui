import {Box, Typography} from '@mui/material';
import { Container } from '@mui/system';
import { Header } from './components/Header';
import { useState } from 'react';
import { Category } from './components/Category';
import { Filter } from './components/Filter';
import { CardGoods } from './components/CardGoods';

function App() {


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

            <Category
              selectButton={selectButton}
              changeSelectButton={(e) => changeSelectButton(e)} 
            />

            <Filter
              openFilter={openFilter}
              setOpenFilter={(e) => setOpenFilter(e)}
              selectFilter={selectFilter}
              changeSelect={(e) => changeSelect(e)}
            />

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
              <CardGoods />
            </div>
          </div>
        </Box>
      </Container>


    </div>
  );
}

export default App;
