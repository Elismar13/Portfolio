import React from 'react';

import './styles.css';

export default function Techs() {
    return (
        <div className="tecnologias">
            <h3>Tecnologias que já trabalhei</h3>
                <div className="techs">
                    <i class="devicon-cplusplus-plain"></i>
                    <i class="devicon-java-plain"></i>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-python-plain"></i>
                    <i class="devicon-git-plain"></i>
                </div>

            <h3>Tecnologias que estou estudando</h3>
                <div className="techs">
                    <i class="devicon-nodejs-plain"></i>
                    <i class="devicon-express-original"></i>
                    <i class="devicon-html5-plain"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-react-original"></i>
                </div>
        </div>
    );
}