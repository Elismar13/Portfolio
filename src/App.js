import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';

import Header from './components/Header/index';

const App = () => (
    <>
        <Header />
        <Routes />
    </>
);

export default App;
