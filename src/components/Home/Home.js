
import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom'
import LogoTitle from "../../assets/images/logo-s.png";
const Home=()=>{
    return(
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br/> I'm 
            <img src={LogoTitle} alt="dev"/>
            Hein
            <br/>
            Web developer
            </h1>
            <h2>Frontend Developer / College Graduate</h2>
            <Link to ="/contact" className="flat-button">Contact Me</Link>
        </div>

    </div>);
}

export default Home;