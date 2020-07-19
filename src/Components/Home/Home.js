import React from 'react'
import style from './Home.module.css';
import adidas from '../../img/adidas.png';
import { Grid, Container, Button } from '@material-ui/core';

const Home = () =>{

  return (
    <div className={style.main}>
          <Container className={style.container}>
                <Grid container spacing={3}>
                  <Grid item sm className={style.homeLeft}>
                    <h1 className={style.mainHeading}>Shoe Store</h1>
                    <h5>streetwear / lifestyle / sports</h5>
                    <h4 className={style.h4}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h4>
                    <Button className={style.btn}>View All Product</Button>
                  </Grid>
                
                  <Grid item sm className={style.homeRight}>
                  <img className={style.img} src={adidas} alt="adidas" title="adidas"/>
                  </Grid>
                </Grid>
          </Container>
    </div>
    )
}
export default Home;