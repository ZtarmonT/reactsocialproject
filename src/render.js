import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state.js';
import {addPost} from './redux/state.js';
import {BrowserRouter} from 'react-router-dom';



export let renderEntireTree = () => {
    ReactDOM.render(
    <BrowserRouter>
        <App appstate={state} addPost = {addPost} />
    </BrowserRouter>,
    document.getElementById('root'));
}




serviceWorker.unregister();


