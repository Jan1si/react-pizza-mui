import { Box, Skeleton, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Header } from './components/Header';
import { Category } from './components/Category';
import { Filter } from './components/Filter';
import { CardGoods } from './components/CardGoods';

import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [goodsItems, setGoodsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://635c38b9f0bc26795bfb9b6e.mockapi.io/items");
        setGoodsItems(data);
        setLoading(false);
      } catch (error) {
        alert("Неудалось получить данные!");
        console.log(error);
      }
    }
    fetchData();
  }, [])

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
              {loading ? (
                [...Array(10)].map((item, idx) => (
                  <Stack spacing={1} sx={{ mt: "35px" }}>
                    <Skeleton animation={"wave"} variant='circular' width={"260px"} height={"260px"} />
                    <Skeleton animation={"wave"} variant='rounded' width={"260px"} height={"25px"} />
                    <Skeleton animation={"wave"} variant='rounded' width={"260px"} height={"100px"} />
                    <Box width={"100%"} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Skeleton animation={"wave"} variant='rounded' width={"70px"} height={"20px"} />
                      <Skeleton animation={"wave"} variant='rounded' width={"100px"} height={"30px"} />
                    </Box>
                  </Stack>
                ))
              ) : (
                goodsItems.map((item, idx) => (
                  <CardGoods idx={idx} loading={loading} {...item} />
                ))
              )}

            </div>
          </div>
        </Box>
      </Container>


    </div>
  );
}

export default App;
