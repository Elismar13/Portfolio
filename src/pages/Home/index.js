import React, { useState, useEffect } from 'react';


import './styles.css';

import api from '../../api/githubProfile';
import jogos from '../../api/games';

import Hello from '../../components/Hello';
import Techs from '../../components/Techs';
import Repositories from '../../components/Repositories';


const Home = () => {
    const [user, setUser] = useState({});
    const [repositorios, setRepo] = useState([]);

    useEffect( () => {
        async function getUser() {
            const UserRequest = await api.get("/Elismar13");
            setUser( UserRequest.data ); //login, html_url, name, bio, avatar_url
        }

        async function getRepositorios() {
            const RepoRequest = await api.get("/Elismar13/repos?&sort=update");
            setRepo( RepoRequest.data );
        }
        
        getUser();
        getRepositorios();


        
     }, [] )


    return (
            <div className="container">
                <Hello />
                
                <div className="description">
                    <div className="description-image">
                        <img src={user.avatar_url} className="MinhaImagem" />
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

                <Techs />

                <Repositories repositorios={repositorios} />


                <div className="games">
                    <h3>Meus jogos favoritos</h3>
                        <section>
                            { jogos.map((item, id) => {
                                return(
                                    <div className="games-box"key={id}>
                                        <div className="games-text">
                                            <p className="games-title">{item.nome}</p>< br/>
                                            <p className="games-description">{item.descricao}</p>
                                        </div>
                                        <img src={item.foto} />
                                    </div>
                                )
                            })}
                        </section>
                </div>

            </div>
    )
};

export default Home;