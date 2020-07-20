import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import {Home,Product,SingleProduct,Cart,NotFound, Navbar} from './Components/InitializeComponents';

 function Router(){
    return(
        <BrowserRouter>
    
            <Navbar/>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Product" element={<Product/>}/>
                <Route path="/Product/:slug" element={<SingleProduct/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;