import React from 'react'
import Me from "../../img/Me.jpeg"
import "./intro.css"

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My Name is</h2>
                    <h1 className="i-name">Biswajit Ghosh</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Student</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Programmer</div>
                            <div className="i-title-item">Illustrator</div>
                        </div>
                    </div>
                    <p className="desc">
                    Hello,<br/>I am Biswajit Ghosh. I am from Barrackpore. I have done my schooling from Barrackpore A. B. Model High School and then pursued B.Tech in Academy of Technology. I love development and besides that I love to play cricket and chess.
                    </p>
                </div>
            </div>
            <div className='i-right'>
                <div className="i-bg"></div>
                <img src={Me} alt="" className='i-img' />
            </div>
        </div>
    )
}

export default Intro