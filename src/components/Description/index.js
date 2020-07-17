import React from 'react';

import './styles.css';

// eslint-disable-next-line react/prop-types
export default function Description({ user = {} }) {
    return (
        <div className="description">
            <div className="description-image">
                <img src={user.avatar_url} className="MinhaImagem" alt="Avatar" />
                <p> {user.login} </p>
            </div>
            <div className="description-text">
                <p>Olá! Me chamo <strong>Elismar Silva Pereira</strong>, tenho 18 anos e sou de uma pequena cidade 
                    localizada no agreste paraibano.</p>
                <p>Desde pequeno sempre gostei de assuntos que envolviam tecnologia, mais especificadamente programação e eletrônica, 
                    foi daí que surgiu minha paixão por estas magníficas áreas.</p>
                <p>Posteriormente conclui um curso técnico na área de Telecomunicações, onde tive a oportunidade de entrar de vez neste mundo da tecnologia. 
                    Atualmente sigo minha longa jornada no Instituto Federal da Paraíba - Campus Campina Grande, 
                    no curso superior de Engenharia de Computação (2019.1).</p>
            </div>
        </div>
    )
}
