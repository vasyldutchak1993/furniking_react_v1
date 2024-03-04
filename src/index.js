import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const BASE_NAME='furniking_react_v1'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={BASE_NAME}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

