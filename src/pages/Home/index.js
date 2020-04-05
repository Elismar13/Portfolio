import React, { useState, useEffect } from 'react';


import './styles.css';

import api from '../../api/githubProfile';

import projects from '../../api/projects'

import Hello from '../../components/Hello';
import Description from '../../components/Description';
import Techs from '../../components/Techs';
import Repositories from '../../components/Repositories';
import Games from '../../components/Games';


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
                
                <Description user={user} />

                <div className="projects">
                    <h3>Minhas contribuições</h3>
                        <section>
                            { projects.map((value, id) => {
                                return(
                                    <div className="projects-info" key={id}>
                                        <img src={value.logo}/>
                                        <p className="projects-description">{value.description === null ? "Estou sem descição :(" : value.description}</p>
                                    </div>
                                )
                            })}
                        </section>
                </div>

                <Techs />

                <Repositories repositorios={repositorios} />

                <Games />
            </div>
    )
};

export default Home;