import React from 'react';
import { FaInstagram, 
         FaLinkedin, 
         FaFacebook, 
         FaTwitter, 
         FaGithub } from 'react-icons/fa';

import './styles.css';


export default function Hello() {
    return (
        <div className="header">
            <h1>Olá, Me chamo <strong>Elismar</strong>!</h1>
            <p>Estudante de engenharia de computação e fascinado por projetos open-source.</p>
            <div className="links">
                <a href="https://github.com/Elismar13"> 
                    <FaGithub size={60} title="GitHub"/> </a>
                <a> <FaLinkedin size={60} title="Linkedin"/> </a>
                <a> <FaTwitter size={60} title="Twitter"/> </a>
                <a> <FaInstagram size={60} title="Instagram"/> </a>
                <a> <FaFacebook size={60}  title="Facebook" />  </a> 
            </div>
        </div>
    );
}