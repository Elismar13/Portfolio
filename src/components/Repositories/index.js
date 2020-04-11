import React, {useState, useEffect} from 'react';

import './styles.css';

// eslint-disable-next-line react/prop-types
export default function Repositories( {repositorios} ) {
    const Redireciona = (url) => window.open(url);

    const [repos, setRepo] = useState([]);
    const [reponumber, setNumber] = useState(0);

    useEffect(() => {
        function setRepoData() {
            setRepo(repositorios.slice(0, 5*reponumber));
            console.log(reponumber)
        }

        setRepoData();
    }, [reponumber]);


    return (
        <div className="repositorios">
            <h3>Minhas contribuições</h3>
                <section>
                    { repos.map((value, id) => {
                        return(
                            <div className="repositorios-item" 
                                 key={id}  
                                 onClick={() => {Redireciona(value.html_url)}}
                                >
                                <p className="repositorios-name">{value.name}</p>
                                <p className="repositorios-description">
                                    {value.description === null ? "Estou sem descição :(" : value.description}
                                </p>
                                <p className="repositorios-techs">{value.language === null ? "Multiplas" : value.language}</p>
                            </div>
                        )
                    })}
                </section>
                <button 
                    className="mostrarmais"
                    onClick={() => setNumber(reponumber + 1)}
                    >
                    Mostrar mais
                </button>
        </div>
        // <div>
        //     {console.log(repositorios)}
        // </div>
        
    );
}