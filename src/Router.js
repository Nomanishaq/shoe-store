import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import {Home,Product,SingleProduct,NotFound, Navbar, Footer} from './Components/InitializeComponents';
import Context from './CountContext';

 function Router(){

    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Product" element={<Product/>}/>
                <Route path="/Product/:slug" element={<SingleProduct/>}/>
                <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;