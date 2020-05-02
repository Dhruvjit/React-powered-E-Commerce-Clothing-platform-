import React from 'react';
import './homepage.style.scss'
import Directory from "../../components/directory/directory.component";
import {BrowserRouter as Router, Link} from "react-router-dom";

export const HomePage = () => {
    return(
        <div className="homepage">
            <Directory/>
        </div>
    );
}