import React from 'react';

import './styles.css';

import links from './icons';

const Header = () => {

    return (
        <header>
            <div id="links">
                { links.map( (value, id) => {
                    return(
                        <a href={value.social}>
                            <img className="Icons"
                                src={value.logo} 
                            />
                        </a>
                    )
                } )}
            </div>
        </header>
    )
};


export default Header;