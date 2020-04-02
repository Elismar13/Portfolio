import React from 'react';

import './styles.css';

export default function Repositories( {repositorios} ) {
    const Redireciona = (url) => window.open(url);


    return (
        <div className="repositorios">
            <h3>Minhas contribuições</h3>
                <section>
                    { repositorios.map((value, id) => {
                        return(
                            <div className="repositorios-item" key={id} onClick={(props) => {Redireciona(value.html_url)}} >
                                <p className="repositorios-name">{value.name}</p>
                                <p className="repositorios-description">{value.description === null ? "Estou sem descição :(" : value.description}</p>
                                <p className="repositirios-techs">{value.language === null ? "Multiplas" : value.language}</p>
                            </div>
                        )
                    })}
                </section>
        </div>
        // <div>
        //     {console.log(repositorios)}
        // </div>
        
    );
}