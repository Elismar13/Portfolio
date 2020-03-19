import React, {useState, useEffect, Image} from 'react';
import './styles.css';

import api from '../../api/githubProfile';
import jogos from '../../api/games';

const Home = () => {
    const [user, setUser] = useState({});
    const [repositorios, setRepo] = useState([]);

    useEffect( () => {
        async function getUser() {
            const UserRequest = await api.get("/Elismar13");
            setUser(UserRequest.data); //login, html_url, name, bio, avatar_url
        }

        async function getRepositorios() {
            const RepoRequest = await api.get("/Elismar13/repos?&sort=update");
            setRepo(RepoRequest.data);
        }
        
        getUser();
        getRepositorios();


        console.log(user)
     }, [] )

     function Redireciona(url) {
          window.location.replace(url);
     }

    return (
            <div className="Container">
                <img src={user.avatar_url} className="MinhaImagem" />
                <h1 className="MeuNome">{user.login}</h1>

                    <section className="Descricao">
                        <p>Olá! Me chamo <strong>Elismar Silva Pereira</strong>, tenho 18 anos e sou de uma pequena cidade 
                            localizada no agreste paraibano.</p>
                        <p>Desde pequeno sempre gostei de assuntos que envolviam tecnologia, mais especificadamente programação e eletrônica, 
                            foi daí que surgiu minha paixão por estas magníficas áreas.</p>
                        <p>Posteriormente conclui um curso técnico na área de Telecomunicações, onde tive a oportunidade de entrar de vez neste mundo da tecnologia. 
                            Atualmente sigo minha longa jornada no Instituto Federal da Paraíba - Campus Campina Grande, 
                            no curso superior de Engenharia de Computação (2019.1).</p>
                    </section>

                <h3>Minhas contribuições</h3>
                    <section className="Repositorios">
                        { repositorios.map((value, id) => {
                            return(
                                <div className="ItemRepositorio" key={id} onClick={(props) => {Redireciona(value.html_url)}} >
                                    <p className="NomeRepositorio">{value.name}</p>
                                    <p className="DescricaoRepositorio">{value.description === null ? "Estou sem descição :(" : value.description}</p>
                                    <p className="TecnologiasRepositorios">{value.language === null ? "Multiplas" : value.language}</p>
                                </div>
                            )
                        })}
                    </section>

                <h3>Meus jogos favoritos</h3>
                    <section className="Jogos">
                        { jogos.map((item, id) => {
                            return(
                                <div className="CardJogo"key={id}>
                                    <div className="Texto">
                                        <p className="TituloJogo">{item.nome}</p>< br/>
                                        <p className="Descricao">{item.descricao}</p>
                                    </div>
                                    <img src={item.foto} />
                                </div>
                            )
                        })}
                    </section>
            </div>
    )
};

export default Home;