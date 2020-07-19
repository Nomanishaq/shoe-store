import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import {Home,Product,SingleProduct,Cart,NotFound, Navbar} from './Components/index';

 function RouterComponent(){
    return(
        <Router>
    
            <Navbar/>
        <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Product" element={<Product/>}/>
                <Route path="/SinglePage" element={<SingleProduct/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}>
                    
                </Route>

        </Routes>
        </Router>
    )
}

export default RouterComponent;