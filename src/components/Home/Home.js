
import React,{ useEffect, useState } from 'react';
import './Home.scss';
import {Link} from 'react-router-dom'
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetter from '../AnimatedLetters/AnimatedLetters.js';
import Logo from './Logo/Logo.js';
const Home=()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = "Hein".split('')
    const jobArray = "Web developer.".split('')
    
   useEffect(()=>{
     setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },4000)
   },[])

    return(
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br/>
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
            <img src={LogoTitle} alt="dev"/>
            <AnimatedLetter  letterClass={letterClass} 
            strArray={nameArray}
            idx={15}
            />
            <br/>
            <AnimatedLetter  letterClass={letterClass} 
            strArray={jobArray}
            idx={22}
            />
            </h1>
            <h2>Frontend Developer / College Graduate</h2>
            <Link to ="/contact" className="flat-button">Contact Me</Link>
            
        </div>
        <Logo/>
    </div>);
}

export default Home;