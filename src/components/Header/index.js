import React from 'react';
import './styles.css';

const Header = () => (
    <header>
        <div className="links">
            <a href="/">Home</a>
            <a href="/about">Sobre</a>
            <a href="/repositories">Repositórios</a>
        </div>
    </header>
);

export default Header;