import './Contact.scss';
import React,{useState,useEffect, useRef} from 'react';
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetters/AnimatedLetters.js';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact=()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm  = useRef()
    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'default_service',
            'template_iaidis1',
            refForm.current,
            'YHFnj6jm9kZ4YznL-'
        ).then(
            ()=>{
                alert('Message successfully sent!')
                window.location.reload(false);
            },
            (error)=>{
                alert('Failed to send message ' + error.text)
            }
        )
    }
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
                        <form ref={refForm} onSubmit={sendEmail}>
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
                <div className="info-map">
                    Phyo, Hein
                    <br/>
                    United States
                    <br/>
                    123 East 22nd,16A<br/>
                    ABC City, ABC 12345 <br/>
                    <span>phyozawhein1997@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[51.5072,0.1276]} zoom={13}>
                        <TileLayer url ="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[51.5072,0.1276]}>
                            <Popup>Phyo lives here !</Popup>
                        
                        </Marker>

                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact