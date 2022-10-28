import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Header } from './components/Header';
import { Category } from './components/Category';
import { Filter } from './components/Filter';
import { CardGoods } from './components/CardGoods';

import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [goodsItems, setGoodsItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading((prev) => !prev);
        const { data } = await axios.get("https://635c38b9f0bc26795bfb9b6e.mockapi.io/items");
        setGoodsItems(data);
        setLoading((prev) => !prev);
      } catch (error) {
        alert("Неудалось получить данные!");
        console.log(error);
      }
    }
    fetchData();
  }, [])

  console.log(loading);

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
            <Category />
            <Filter />
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
              {goodsItems.map((item, idx) => (
                 <CardGoods loading={loading} {...item} />
              ))}
            </div>
          </div>
        </Box>
      </Container>


    </div>
  );
}

export default App;
