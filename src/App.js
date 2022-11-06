import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { Header } from './components/Header';

import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Main } from './pages/Main';

export const AppContext = createContext({});

function App() {

  const [goodsItems, setGoodsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectCategory, setSelectCategory] = useState(0);
  const [selectFilter, setSelectFilter] = useState("title");

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

  const onSelectCategory = (category) => {
    setSelectCategory(category);
  }

  const onSelectFilter = (filter) => {
    setSelectFilter(filter);
  }

  return (
    <div className="App">
      <Container className="container" maxWidth="lg" sx={{
        backgroundColor: 'white',
        margin: '50px auto',
        borderRadius: '10px',
      }}>
        <Header />
        <Box className="wrapp__content" sx={{
        padding: '0px 50px',
        marginTop: '40px',
      }}>
        <AppContext.Provider value={
            {
              goodsItems,
              loading,
              selectCategory,
              selectFilter,
              onSelectCategory,
              onSelectFilter,
            }
          }>
          <Routes> 
            <Route exact path='/' element={<Main />}/>
            <Route exact path='/cart' element={<Cart />}/>
          </Routes>
        </AppContext.Provider>
        </Box>
      </Container>


    </div>
  );
}

export default App;
