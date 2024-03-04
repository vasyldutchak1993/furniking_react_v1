import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<h1>HOME PAGE</h1>}/>
                <Route path='shop' element={<h1>SHOP</h1>}/>
                <Route path='blog' element={<h1>BLOG</h1>}/>
                <Route path='about' element={<h1>About</h1>}/>
                <Route path='contact' element={<h1>CONTACT US</h1>}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Route>
        </Routes>
    );
}

export default App;
