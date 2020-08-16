import React, { useState, useEffect } from 'react';
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
    const [size, setSize] = useState(40);

    function scroll() {
        const heigth = window.screen.availHeight;
        window.scrollTo(0, heigth);
    }

    useEffect(() => {
        const reziseEvent = window.addEventListener('resize', function(e) {
            if(window.screen.width < 700) {
                setSize(40);
            }
            if(window.screen.width < 400) {
                setSize(25);
            }
            console.log(window.screen.availWidth);
        });
        //window.removeEventListener('resize', reziseEvent);
    }, []);

    return (
        <header className="header">
            <h1>Olá, Me chamo <strong>Elismar</strong>!</h1>
            <p>Estudante de engenharia de computação e fascinado por projetos open-source.</p>
            <div className="links">
                <LinkIcon href={socialLinks.Git.link}> 
                    <FaGithub    
                        size={size}   
                        title={socialLinks.Git.title}
                    /> 
                </LinkIcon>
                <LinkIcon href={socialLinks.Linkedin.link} > 
                    <FaLinkedin  
                        size={size}   
                        title={socialLinks.Linkedin.title}
                    /> 
                </LinkIcon>
                <LinkIcon href={socialLinks.Twitter.link}> 
                    <FaTwitter   
                        size={size}   
                        title={socialLinks.Twitter.title}
                    /> 
                </LinkIcon>
                <LinkIcon href={socialLinks.Instagram.link}> 
                    <FaInstagram 
                        size={size}
                        title={socialLinks.Instagram.title}
                    /> 
                </LinkIcon>
                <LinkIcon href={socialLinks.Facebook.link}> 
                    <FaFacebook  
                        size={size}   
                        title={socialLinks.Facebook.title}
                    />  
                </LinkIcon> 
                <LinkIcon href={socialLinks.Twitch.link}> 
                    <FaTwitch  
                        size={size}   
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