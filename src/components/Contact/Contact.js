import './Contact.scss';
import React,{useState,useEffect} from 'react';
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetters/AnimatedLetters.js';
const Contact=()=>{
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass('text-animate-hover')
       },3000)
      },[])

    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetter 
                        letterClass={letterClass}
                        strArray= {"Contact Me".split('')}
                        idx={15}
                        />

                    </h1>

                    <p>
                        You can contact me via form below ! 
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name ="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name ="email" placeholder="Email" required/>
                                </li>
                                <li>
                                   <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required/>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact