import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/css/main.css';
import App from './App';
import store from './configureStore.js';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
