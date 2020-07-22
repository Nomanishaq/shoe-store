import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import products from '../../Services/ProductApi.json';
import singleProductStyle from './SingleProduct.module.css';
import NotFound from '../NotFound/NotFound';
import {Container} from '@material-ui/core';

const SingleProduct=()=> {
    // const [productDetails, setProductDetails] = useState();
    useEffect(()=>{
        document.title=`Shoe Store | Product `;
    },[]);
    
    const {slug} = useParams();

    const shoe = products[slug];
    if (!shoe){
        return <NotFound/>
      }

    return (
        <div className={singleProductStyle.background}>
            <Container>
            <img src={shoe.imageURL} className={singleProductStyle.image}  alt={shoe.name}/>
            <h1 className={singleProductStyle.title}>{shoe.name}</h1><hr/>
            <h3 className={singleProductStyle.title}>BRAND:  {shoe.brand}</h3>
            <h3 className={singleProductStyle.title}>PRICE:  {shoe.price}$</h3>
            <h3 className={singleProductStyle.title}>CATEGORY:   {shoe.category}</h3>
            <h3 className={singleProductStyle.title}>GENDER:   {shoe.gender}</h3>
            <h3 className={singleProductStyle.title}>ITEM LEFT:   {shoe.items_left}</h3>
            <h3 className={singleProductStyle.title}>Rating:   {shoe.rating}</h3>
            </Container>
<br/>
            
           </div>
           
    )
}

export default SingleProduct; 