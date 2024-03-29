import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme/theme";
import CurrencyContext from "./contexts/currencyContext";
import BasketContext from "./contexts/basketContext";

const BASE_NAME = 'furniking_react_v1'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={BASE_NAME}>
           <BasketContext>
               <CurrencyContext>
                   <ThemeProvider theme={theme}>
                       <App/>
                   </ThemeProvider>
               </CurrencyContext>
           </BasketContext>
        </BrowserRouter>
    </React.StrictMode>
);

