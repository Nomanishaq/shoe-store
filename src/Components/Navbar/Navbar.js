import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Button,Typography, Toolbar,AppBar} from '@material-ui/core/';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import logo from '../../img/nike.png';
import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css';
import Context from '../../CountContext';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  inherit: {
    background: 'linear-gradient(90deg, rgb(35, 42, 107) 10%, rgb(97, 108, 187) 100%)',
    borderBottom: '1px solid white !important',
    height: '80px',
  }
}));

let Navbar = ()=> {
  const classes = useStyles();
  let cartValue = useContext(Context);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.inherit}> 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to="/"><img src={logo} alt="shoe store" className={style.logo} /></NavLink>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button color="inherit"><NavLink to="/" className={style.linkColor}>Home</NavLink></Button>
          <Button color="inherit"><NavLink to="/Product" className={style.linkColor} activeClassName={style.active}>Shop</NavLink></Button>
  <Button title="cart" color="inherit"><NavLink to="/Product" className={style.linkColor} activeClassName={style.active}>{<LocalGroceryStoreIcon/>}<span>{cartValue}</span></NavLink></Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Navbar;