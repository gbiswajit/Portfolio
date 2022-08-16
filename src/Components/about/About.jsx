import React from 'react'
import "../about/about.css"
import Me from "../../img/Me.jpeg"

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card me">
                    <img
                        src={Me}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia enim, facere sed earum dolorum praesentium similique numquam officiis minus alias fuga reiciendis quam perferendis quia? Hic sit quisquam voluptatum expedita et placeat.</p>
                <div className="achievements">
                <div className="ach">
                        <img src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" className="ach-img" />
                        <div className="ach-texts">
                            <h3 className="ach-text">B. Tech From Academy of Technology</h3>
                            <p className="ach-subtext">July 2019 - Present</p>
                        </div>
                    </div>
                    <div className="ach">
                        <img src="https://www.atlantatech.news/wp-content/uploads/2020/12/Persistent_Systems_Logo.jpg" alt="" className="ach-img" />
                        <div className="ach-texts">
                            <h3 className="ach-text">Persistent Summer Intern 2022</h3>
                            <p className="ach-subtext">May 2022 - August 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About