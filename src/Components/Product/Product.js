import React, { useEffect, useState } from 'react';
import style from './Product.module.css';
import products from '../../Services/ProductApi.json';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Loading from '../Loading/Loading';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(37),
            height: theme.spacing(50)
        }
    },
}));

const Product = () => {
    const classes = useStyles();
    const [data, setData] = useState();
    useEffect(() => {
        document.title = 'Shoe Store | Products';
        const getData = async ()=>{
            const da = await products
            setData(da);
        }
        getData();
    }, [])
    return (
        <div className={style.container}>
            <div className={style.pageTitleContainer}><br/>
            <h1 className={style.pageTitle}>Products</h1>
            </div>
            <div className={style.productContainer}>
                <div className={classes.root} >
                    {
                        !data ? <Loading/> :
                           Object.keys(data).map((val,key) => {
                               const index = data[val];
                                return (
                                    <Paper className={style.productItem} key={key} elevation={3}>
                                       <Link to={`/Product/${val}`} className={style.productTitle}> <img src={index.imageURL} alt={index.name} className={style.productImg} width="90%" />
                                        <h2>{index.name}</h2></Link>
                                <Button className={style.btn}><AddShoppingCartIcon/></Button>
                              
                                    </Paper>
                                )
                            })
                    }
                </div></div>
        </div>
    )
}
export default Product; 