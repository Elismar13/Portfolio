import React, { useState, useEffect } from 'react';
import { FaInstagram, 
         FaLinkedin, 
         FaFacebook, 
         FaTwitter, 
         FaGithub,
         FaAngleDoubleDown } from 'react-icons/fa';

import './styles.css';


export default function Hello() {
    const [size, setSize] = useState(60);

    function scroll() {
        const heigth = window.screen.availHeight;
        window.scrollTo(0, heigth);
    }

    useEffect(() => {
        if(window.screen.width < 700) {
            setSize(40);
        }
    });

    return (
        <div className="header">
                <h1>Olá, Me chamo <strong>Elismar</strong>!</h1>
            <p>Estudante de engenharia de computação e fascinado por projetos open-source.</p>
            <div className="links">
                <a href="https://github.com/Elismar13"> 
                    <FaGithub    size={size}   title="GitHub"/> 
                </a>
                <a> 
                    <FaLinkedin  size={size}   title="Linkedin"/> 
                </a>
                <a> 
                    <FaTwitter   size={size}   title="Twitter"/> 
                </a>
                <a> 
                    <FaInstagram size={size}   title="Instagram"/> 
                </a>
                <a> 
                    <FaFacebook  size={size}   title="Facebook" />  
                </a> 
            </div>
            <div className="scroll-button">
                <button onClick={() => scroll(5)}>
                    <FaAngleDoubleDown size={20} color="#ffffff" />
                </button>
            </div>
        </div>
    );
}