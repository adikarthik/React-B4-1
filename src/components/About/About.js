import React from 'react'
import './About.css';

const About = () => {
    return (
        <div className="container">
            <div className='container-text'>
                <h4 className='about'>ABOUT</h4>
                <h1>WHO WE ARE</h1>
            </div>

            <div className='body-about'>
                <div className="body-image">
                    < img width={'420px'} src="https://www.amigosbusinesscorp.com/img/training.jpg" alt="" />
                </div>
                <div className='about-text'>
                    <h2>An Year Experience</h2>
                    <p>We Started in 2021 December with just 8 students for a batch of Java training.</p>
                    <p>We started the training for Devops as the next stream and followed by SAP,
                        React and planning to extend the training to Quality Assurance, Data engineer,
                        Data analytics and HR profiles.</p>
                    <button className='btn'>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default About;
