import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import {lazy} from "react";

const HomePage = lazy(() => import('./pages/HomePage'))
const BasketPage = lazy(() => import('./pages/BasketPage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const FavoritePage = lazy(() => import('./pages/FavoritePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogItemPage = lazy(() => import('./pages/BlogItemPage'))
const ProductDetailPage=lazy(()=>import("./pages/ProductDetailPage"))
const LoginPage=lazy(()=>import("./pages/LoginPage"))
function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='shop' element={<ShopPage/>}/>
                <Route path='product/:id' element={<ProductDetailPage/>}/>
                <Route path='blog' element={<BlogPage/>}/>
                <Route path='blog/:id' element={<BlogItemPage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                <Route path='contact' element={<ContactPage/>}/>
                <Route path='basket' element={<BasketPage/>}/>
                <Route path='favorite' element={<FavoritePage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Route>
        </Routes>
    );
}

export default App;
