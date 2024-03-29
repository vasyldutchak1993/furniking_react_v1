import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import {lazy} from "react";
const HomePage=lazy(()=>import('./pages/HomePage'))
const BasketPage=lazy(()=>import('./pages/BasketPage'))

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='shop' element={<h1>SHOP</h1>}/>
                <Route path='blog' element={<h1>BLOG</h1>}/>
                <Route path='about' element={<h1>About</h1>}/>
                <Route path='contact' element={<h1>CONTACT US</h1>}/>
                <Route path='basket' element={<BasketPage/>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Route>
        </Routes>
    );
}

export default App;
