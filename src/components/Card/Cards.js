import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Cards.css';

const Cards = () => {
    return (
        <div>
            <div className="team-info">
                <p>Team Member</p>
                <h2>Meet Our Expert Trainers</h2>
            </div>
            <div className="team-one">
                <div className="profile-one">
                    <img className='team-image' src='https://www.amigosbusinesscorp.com/img/bharat.jpg' alt='bharat '></img>
                    <h3>Bharat kumar T</h3>
                    <p>Administrator</p>
                    <div className='team-social'>
                        <FaLinkedinIn className='a' />
                        <FaInstagram className='a' />
                    </div>
                </div>

                <div className="profile-one">
                    <img className='team-image' src='https://www.amigosbusinesscorp.com/img/swamy.jpg' alt=' '></img>
                    <h3>Swamy R</h3>
                    <p>Co-ordinator</p>
                    <div className='team-social'>
                        <FaLinkedinIn className='a' />
                        <FaInstagram className='a' />
                    </div>
                </div>

                <div className="profile-one">
                    <img className='team-image' src='https://www.amigosbusinesscorp.com/img/praveen.jpg' alt=' '></img>
                    <h3>Praveen K</h3>
                    <p>Trainer</p>
                    <div className='team-social'>
                        <FaLinkedinIn className='a' />
                        <FaInstagram className='a' />
                    </div>
                </div>

                <div className="profile-one">
                    <img className='team-image' src='https://www.amigosbusinesscorp.com/img/adi.jpg' alt=' '></img>
                    <h3>Adikarthik Gupta</h3>
                    <p>Trainer</p>
                    <div className='team-social'>
                        <FaLinkedinIn className='a' />
                        <FaInstagram className='a' />
                    </div>
                </div>
            </div>

            <div className="team-two">

                <div className="profile-one">
                    <img className='team-image' src='https://www.amigosbusinesscorp.com/img/harish.jpg' alt=' '></img>
                    <h3>Harish</h3>
                    <p>Trainer</p>
                    <div className='team-social'>
                        <FaLinkedinIn className='a' />
                        <FaInstagram className='a' />
                    </div>
                </div>

                <div className="profile-one">
                    <img className='team-image' src='https://www.amigosbusinesscorp.com/img/shashi.jpg' alt=' '></img>
                    <h3>Shashikala</h3>
                    <p>Trainer</p>
                    <div className='team-social'>
                        <FaLinkedinIn className='a' />
                        <FaInstagram className='a' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
