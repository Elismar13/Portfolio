import React from 'react';

import './styles.css';

export default function Techs() {
    return (
        <div className="tecnologias">
            <h3>Tecnologias que já trabalhei</h3>
                <div className="techs">
                    <i className="devicon-cplusplus-plain"></i>
                    <i className="devicon-java-plain"></i>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-python-plain"></i>
                    <i className="devicon-git-plain"></i>
                </div>

            <h3>Tecnologias que estou estudando</h3>
                <div className="techs">
                    <i className="devicon-nodejs-plain"></i>
                    <i className="devicon-express-original"></i>
                    <i className="devicon-html5-plain"></i>
                    <i className="devicon-css3-plain"></i>
                    <i className="devicon-react-original"></i>
                </div>
        </div>
    );
}