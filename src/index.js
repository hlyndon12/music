import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
// import BgColorExample from './Card';
import Register from './Register';
import ReactDOM from 'react-dom'; 
import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Product from './Products';
import Cart from './Cart';
import Home from './Home';
import Header from './Nav';
const routing = (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route> 
      <Route path='/login' element={<Login/>}></Route> 
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
  </BrowserRouter>
)
ReactDOM.render (routing, document.getElementById('root'));
reportWebVitals();