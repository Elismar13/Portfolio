import React, {useState, useEffect} from 'react';

import './styles.css';

// eslint-disable-next-line react/prop-types
export default function Repositories( {repositorios = []} ) {
    const Redireciona = (url) => window.open(url);

    const [reponumber, setNumber] = useState(1);
    const [textButton, setText] = useState("Mostrar mais");

    useEffect(() => {
        if(repositorios.length !== 0)
            setText( 5*reponumber <= repositorios.length ? "Mostrar mais" : "Mostrar menos");
    }, [reponumber])

    return (
        <div className="repositorios">
            <h3>Minhas contribuições</h3>
                <section>
                    { repositorios
                        // eslint-disable-next-line react/prop-types
                        .slice(0, 5*reponumber)
                        .map((value, id) => {
                            return(
                                <div className="repositorios-item" 
                                    key={id}  
                                    onClick={() => Redireciona(value.html_url)}
                                >
                                    <p className="repositorios-name">{value.name}</p>
                                    <p className="repositorios-description">
                                        {value.description === null ? "Estou sem descição :(" : value.description}
                                    </p>
                                    <p className="repositorios-techs">{value.language === null ? "Multiplas" : value.language}</p>
                                </div>
                            )
                        })
                    }
                </section>
                <button 
                    className="mostrar-mais"
                    onClick={() => {
                        5*reponumber <= repositorios.length ? setNumber(reponumber + 1) : setNumber(1);
                    }}
                    >
                    {textButton}
                </button>
        </div>
        // <div>
        //     {console.log(repositorios)}
        // </div>
        
    );
}