import React from 'react'
import "../contact/contact.css"
import { Call, Home, Email, Send } from '@material-ui/icons'

const Contact = () => {
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact Me</h1>
                <div className="info">
                    <div className="info-item">
                        <Call style={{ color: "green", width:"5vw", height:"5vh" }}/>
                        <p className="c-text">+91 93305 71517</p>
                    </div>
                    <div className="info-item">
                        <Email style={{ color: "brown", width:"5vw", height:"5vh"}}/>
                        <p className="c-text">ghoshbiswajit2406@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <Home style={{ color: "blue", width:"5vw", height:"5vh" }}/>
                        <p className="c-text">Barrackpore, North 24 Parganas</p>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis, eveniet quam rem fuga aut non ullam quos ea perspiciatis!</p>
                <form>
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder="Subject" name="user_subject"/>
                <input type="text" placeholder="Email" name="user_email"/>
                <textarea rows="5" placeholder='Message' name="message"/>
                <button><Send style={{color: "white"}}/></button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contact