import React, { useState, useEffect } from 'react';


import './styles.css';

import api from '../../data/githubProfile';


import Hello from '../../components/Hello';
import Description from '../../components/Description';
import FeaturedProjects from '../../components/FeaturedProjects';
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
            <section>
                <Hello />
                <Description user={user} />
                <FeaturedProjects />
                <Techs />
                <Repositories repositorios={repositorios} />
                <Games />
            </section>
        </div>
    )
};

export default Home;