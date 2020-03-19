import Phantasy from '../assets/phantasy.png';
import MGS from '../assets/mgsv.jpg';
import LiS from '../assets/LiS.jpg'
import Mario from '../assets/mario.jpg';
import RE from '../assets/residentevil3.jpg'


import React from 'react';

const games = [
    {
        nome:"Phantasy Star",
        descricao:"Um RPG de 1987 que marcou minha infância. Um dos primeiros jogos que joguei e minha porta de entrada para o mundo dos games.",
        foto:Phantasy
    },
    {
        nome:"Super Mario World",
        descricao:"Meu primeiro jogo de plataforma. Foi uma experiência muito divertida, fechei este jogo várias vezes e nunca enjoei.",
        foto:Mario
    },
    {
        nome:"Resident Evil",
        descricao:"Primeiro jogo de terror que joguei. Levei muitos sustos quando pequeno, mas no fim virei fã da franquia.",
        foto:RE
    },
    {
        nome:"Metal Gear Solid",
        descricao:"Minha saga favorita no mundo dos games. Não tenho palavras para descrever minha experiência com a franquia Metal Gear.",
        foto:MGS
    },
    {
        nome:"Life is Strange",
        descricao: "O jogo que marcou minha vida. Me ensinou a dar valor a coisas pequenas e aproveitar cada momento como se fosse o último. ",
        foto:LiS
    },

];

export default games;