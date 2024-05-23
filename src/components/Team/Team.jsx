import React from 'react';
import { teamData } from './TeamData';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './Team.css';

function Team() {
    return (
        <section className="team">
            <div className="container">
                <div className="section-title">
                    <h2 className='hr-lines'>TEAM</h2>
                    <p>OUR HARDWORKING TEAM</p>
                    {teamData.map((val) => {
                        return (
                            <div className='card-container'>
                                <div className='card'>
                                    <img className='card-img' src={val.image} alt="pictures" />
                                    <div className='social-links'>
                                        <a href="/#" ><FaTwitter /></a>
                                        <a href="/#" ><FaFacebookF /></a>
                                        <a href="/#"><FaYoutube /></a>
                                        <a href="/#"><FaInstagram /></a>
                                        <a href="/#"><FaLinkedinIn /></a>
                                    </div>
                                    <h2 className='card-title'> {val.name}</h2>
                                    <h4>{val.designation}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Team;
