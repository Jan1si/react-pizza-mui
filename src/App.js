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
              <CardGoods 
              title={"Пицца из половинок"}
              imgUrl={"https://cdn.dodostatic.net/static/Img/Products/9a468e7d8f5149d89464b4e174599b65_292x292.png"}
              price={645}
               />
               <CardGoods 
              title={"Ветчина и сыр"}
              imgUrl={"https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_292x292.png"}
              price={309}
               />
               <CardGoods 
              title={"Пепперони фреш"}
              imgUrl={"https://cdn.dodostatic.net/static/Img/Products/a55f23f650344e1bb5bd43c7fc6e82fc_292x292.png"}
              price={289}
               />
            </div>
          </div>
        </Box>
      </Container>


    </div>
  );
}

export default App;
