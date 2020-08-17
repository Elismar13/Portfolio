import React from 'react';
import { FaInstagram, 
         FaLinkedin, 
         FaFacebook, 
         FaTwitter, 
         FaGithub,
         FaTwitch,
         FaAngleDoubleDown } from 'react-icons/fa';

import LinkIcon from './LinkIcon';

import './styles.css';

import socialLinks from '../../data/socialLinks';

export default function Hello() {
    const iconSize = 45;

    function scroll() {
        const heigth = window.screen.availHeight;
        window.scrollTo({
            top: heigth,
            behavior: "smooth"
        });
    }

    return (
        <header className="header">
            <h1>Olá, Me chamo <strong>Elismar</strong>!</h1>
            <p>Estudante de engenharia de computação e fascinado por projetos open-source.</p>
            <div className="links">
                <LinkIcon href={socialLinks.Git.link}> 
                    <FaGithub    
                        size={iconSize}   
                        title={socialLinks.Git.title}
                    /> 
                </LinkIcon>
                <LinkIcon href={socialLinks.Linkedin.link} > 
                    <FaLinkedin  
                        size={iconSize}   
                        title={socialLinks.Linkedin.title}
                    /> 
                </LinkIcon>
                <LinkIcon href={socialLinks.Twitter.link}> 
                    <FaTwitter   
                        size={iconSize}   
                        title={socialLinks.Twitter.title}
                    /> 
                </LinkIcon>
                <LinkIcon href={socialLinks.Instagram.link}> 
                    <FaInstagram 
                        size={iconSize}
                        title={socialLinks.Instagram.title}
                    /> 
                </LinkIcon>
                <LinkIcon href={socialLinks.Facebook.link}> 
                    <FaFacebook  
                        size={iconSize}   
                        title={socialLinks.Facebook.title}
                    />  
                </LinkIcon> 
                <LinkIcon href={socialLinks.Twitch.link}> 
                    <FaTwitch  
                        size={iconSize}   
                        title={socialLinks.Twitch.title}
                    />  
                </LinkIcon> 
            </div>
            <div className="scroll-button">
                <button onClick={() => scroll(5)}>
                    <FaAngleDoubleDown size={20} color="#ffffff" />
                </button>
            </div>
        </header>
    );
}
