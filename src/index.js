import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';



ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);