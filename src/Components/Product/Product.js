import React, { useEffect, useState } from 'react';
import style from './Product.module.css';
import { products } from '../../Api/ProductApi';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';

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
        setData(products);
    }, [])
    return (
        <div className={style.container}>
            <div className={style.productContainer}>
                <div className={classes.root} >
                    {
                        !data ? <h1>Loading</h1> :
                            data.map((index) => {
                                return (
                                    <Paper className={style.productItem} key={index.id} elevation={3}>
                                       <Link to={`/Product/${index.slug}`} className={style.productTitle}> <img src={index.imageURL} alt={index.name} width="90%" />
                                        <h2>{index.name}</h2></Link>
                                        <Button className={style.btn}>Add to cart</Button>
                                    </Paper>
                                )
                            })
                    }
                </div></div>
        </div>
    )
}
export default Product; 