import { faAngular, faCss3, faGit, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetters/AnimatedLetters';
import './About.scss'

const About =()=>{
    
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass('text-animate-hover')
       },3000)
      },[])

    return(
    <>
        <div className='container about-page'>
        <div className="text-zone">

            <h1>
                <AnimatedLetter 
                letterClass={letterClass}
                strArray= {"About me".split('')}
                idx={15}
                />
            </h1>
            <p>
                I'm a computer science graduate from City College of New York looking 
                for a role in an established technology company with opportunity to work
                with the lates tech stack on challenging and diverse projects.
            </p>
            <p>
                My passion is in automating laborius tasks. Consequently, this passion
                led me to studying computer science where I discovered programming.
                I usually solve problem using "Divide and Conquer" approach and 
                later improve my solution.
            </p>
        </div>
        <div className="stage-cube-cont">
           <div className='cubespinner'>
                <div className="face1">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faPython} color="#28A4D9"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faGit} color="#EC4D28"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faJs} color="#EFD81D"/>
                </div>
            </div>
        </div>
        </div>
        <Loader type="pacman"/>
    </>
    )
}

export default About;