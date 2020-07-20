import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';

const SingleProduct=()=> {

    const {slug} = useParams();
   useEffect(()=>{
       document.title=`Shoe Store | Product | ${slug}`;
   });
 
    return (
        <div>.
            <h1>{slug}</h1>
        </div>
    )
}

export default SingleProduct; 