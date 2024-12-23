import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './main/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/custom.css'
import { Provider } from 'react-redux';
import storeConfig from './Store/storeConfig';
import { registerServiceWorker } from './serviceWorker'
registerServiceWorker();
const store = storeConfig()

createRoot(
    document.getElementById('app')
)
.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>         
    </React.StrictMode>,
);