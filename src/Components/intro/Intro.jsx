import React from 'react'
import Me from "../../img/man.png"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam ipsa itaque doloremque modi dolores animi aut beatae harum rerum quam minus maiores libero nemo, quae, voluptatem exercitationem molestias culpa? Neque, ad! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus optio vitae similique suscipit saepe architecto delectus blanditiis nesciunt, quidem animi.
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