import React, {useState, useEffect} from 'react';
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
          window.open(url);
     }

    return (
            <div className="Container container-fluid">
                <div className="row-12 Imagem">
                    <img src={user.avatar_url} className="MinhaImagem" />
                    <h1 className="MeuNome">{user.login}</h1>
                </div>
                
                <div className="row-12 Descricao">
                    <p>Olá! Me chamo <strong>Elismar Silva Pereira</strong>, tenho 18 anos e sou de uma pequena cidade 
                        localizada no agreste paraibano.</p>
                    <p>Desde pequeno sempre gostei de assuntos que envolviam tecnologia, mais especificadamente programação e eletrônica, 
                        foi daí que surgiu minha paixão por estas magníficas áreas.</p>
                    <p>Posteriormente conclui um curso técnico na área de Telecomunicações, onde tive a oportunidade de entrar de vez neste mundo da tecnologia. 
                        Atualmente sigo minha longa jornada no Instituto Federal da Paraíba - Campus Campina Grande, 
                        no curso superior de Engenharia de Computação (2019.1).</p>
                </div>

                <div className="row-12 Tecnologias">
                    <h3>Tecnologias que já trabalhei</h3>
                        <div className="Techs">
                            <i class="devicon-cplusplus-plain"></i>
                            <i class="devicon-java-plain"></i>
                            <i class="devicon-javascript-plain"></i>
                            <i class="devicon-python-plain"></i>
                            <i class="devicon-ruby-plain"></i>
                        </div>
                </div>
                <div className="row-12 Tecnologias">
                    <h3>Tecnologias que estou estudando</h3>
                        <div className="Techs">
                            <i class="devicon-nodejs-plain"></i>
                            <i class="devicon-express-original"></i>
                            <i class="devicon-html5-plain"></i>
                            <i class="devicon-css3-plain"></i>
                            <i class="devicon-react-original"></i>
                        </div>
                </div>



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