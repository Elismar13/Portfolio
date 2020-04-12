import React from 'react';

import './styles.css';

import projects from '../../api/projects'

export default function FeaturedProjects() {
    return (
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
    )
}