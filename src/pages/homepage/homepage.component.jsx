import React from 'react';
import './homepage.style.scss'
import Directory from "../../components/directory/directory.component";
import {BrowserRouter as Router, Link} from "react-router-dom";

export const HomePage = () => {
    return(
        <div className="homepage">
            <Directory/>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
            from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    );
}