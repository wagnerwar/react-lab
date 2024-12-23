import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import AuthOrApp from './main/AuthOrApp';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import storeConfig from './store/storeConfig';
import { BrowserRouter } from 'react-router-dom';
const store = storeConfig()

createRoot(
    document.getElementById('app')
)
.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AuthOrApp />
            </BrowserRouter>            
        </Provider>                 
    </React.StrictMode>,
);