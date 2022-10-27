import {Box, Typography} from '@mui/material';
import { Container } from '@mui/system';
import { Header } from './components/Header';
import { Category } from './components/Category';
import { Filter } from './components/Filter';
import { CardGoods } from './components/CardGoods';

import items from './db.json'; 

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
              {items.map((item, idx) => (
                  <CardGoods 
                  {...item}
                   />
              ))}
            </div>
          </div>
        </Box>
      </Container>


    </div>
  );
}

export default App;
