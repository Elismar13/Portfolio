import React from 'react';

import jogos from '../../api/games';

import './styles.css';

export default function Games() {
    return (
        <div className="games">
            <h3>Meus jogos favoritos</h3>
                <section>
                    { jogos.map((jogo, id) => {
                        return(
                            <div className="games-box"key={id}>
                                <div className="games-text">
                                    <p className="games-title">{jogo.nome}</p>< br/>
                                    <p className="games-description">{jogo.descricao}</p>
                                </div>
                                <img src={jogo.foto} />
                            </div>
                        )
                    })}
                </section>
        </div>
    )
}