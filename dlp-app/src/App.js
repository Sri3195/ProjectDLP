
import './App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import digilendImage from './utils/digi-lend.jpg'
import { Card, Grid } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

//import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';





function App() {
  const [products, setProducts] = useState([])

  const url1 = new URL('http://127.0.0.1:8001/v1/fetch');



  useEffect(() => {

    fetch(url1)
    .then(response=>response.json())
    .then(data => { setProducts(data);
    })
  }, []);
  console.log(products)
  return (
    <>
      <Box position='fixed' sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
        <AppBar color='inherit' sx={{ height: 75 }}>
          <Toolbar disableGutters>
            <Typography variant='p' sx={{ ml: 20 }} data-testid="dlp-title" >
              DigiLend
            </Typography>
            <Typography variant='p' sx={{ ml: 30 }} >
              <Link to="/"  data-testid="all-products" style={{ textDecoration: 'none', color: 'black'}}>
                All Products
              </Link>
            </Typography>
            <Typography variant='p' color="black" sx={{ ml: 10 }}>
              <Link to="/"  data-testid="about-us" style={{ textDecoration: 'none', color: 'black' }}>
                About Us
              </Link>
            </Typography>
            <Typography variant='p' color="black" sx={{ ml: 10 }}>
              <Link to="/" data-testid="contact-us" style={{ textDecoration: 'none', color: 'black' }}>
                Contact Us
              </Link>
            </Typography>
            <Button variant='outlined' color='primary' sx={{ ml: 50 }}>SignIn</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <img src={digilendImage} alt="no-image" style={{ marginLeft: '130px', margisnTop: '100px', width: '1250px', height: '400px' }} />
      </Box>
      <Box sx={{ ml: 17, mt: 3 ,mr:10}}>
        <Typography variant='h6' fontWeight='bold' color="black" >
          PRODUCTS
        </Typography>
        <Grid container spacing={6}>
          {products.map(product=>
          <Grid item>
            <Card role='card' sx={{ height: 150, width: 275, mt: 2 ,backgroundColor: '#BADDF9'}}>
              <Typography variant='body1' fontWeight='bold' sx={{ p: 1 }}>{product.productName}</Typography>
              <Typography variant='body2' color='#7B7D83' fontWeight='medium' sx={{ p: 1 }}>{product.productBenefit}</Typography>
              <Box display='flex'>
              <Link to="/phone-number"  state={product.productName} style={{ textDecoration: 'none', color: '#0C0429' }}><Typography variant='body2' sx={{ p: 1 }}>{product.productLink}</Typography></Link>
              <Link to="/phone-number" state={product.productName}style={{ textDecoration: 'none', color: '#0C0429' }}><ArrowForward fontSize='small'sx={{mt:1}}/></Link>
              </Box>
            </Card>
          </Grid>
          )}
        </Grid>
      </Box>
      <Box sx={{ mt:15, backgroundColor: '#7b7d83'}}>
      <Typography variant='p' sx={{ml:50}}>
              DigiLend
            </Typography>
            <Typography variant='p'  sx={{ml:10}}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                All Products
              </Link>
            </Typography>
            <Typography variant='p' color="black" sx={{ml:10}}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                About Us
              </Link>
            </Typography>
            <Typography variant='p' color="black" sx={{ml:10}}>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                Contact Us
              </Link>
            </Typography> 
      </Box>

    </>
  );
}

export default App;
