import React, { useContext, useRef, useState } from 'react'
import "../contact/contact.css"
import { Call, Home, Email, Send } from '@material-ui/icons'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef()
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yl0q8wn', 'template_bhns76m', formRef.current, 'JYmTrtG80xfEfW1Qv')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="info">
                        <div className="info-item">
                            <Call style={{ color: "green", width: "5vw", height: "5vh" }} />
                            <p className="c-text">+91 93305 71517</p>
                        </div>
                        <div className="info-item">
                            <Email style={{ color: "brown", width: "5vw", height: "5vh" }} />
                            <p className="c-text">ghoshbiswajit2406@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <Home style={{ color: "blue", width: "5vw", height: "5vh" }} />
                            <p className="c-text">Barrackpore, North 24 Parganas</p>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">Contack me for any queries or opinion  by</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name="message" />
                        <button><Send style={{ color: "white" }} />{done && <p className='c-sent'>Thank You...</p>}</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact