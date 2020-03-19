import React from 'react';

import './styles.css';

import links from './icons';

const Header = () => {
    function Redireciona(url) {
        window.open(url);
    }

    return (
        <header>
            <div id="links">
                { links.map( (value, id) => {
                    return(
                        <img className="Icons"
                            src={value.logo} 
                            onClick={() => { Redireciona(value.social) }} 
                        />
                    )
                } )}
            </div>
        </header>
    )
};


export default Header;