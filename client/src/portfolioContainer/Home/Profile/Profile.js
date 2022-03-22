import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css'
export default function Profile() {

    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.facebook.com/seydou.ba.581">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/seydou-ba-175148146/">
                                <i className='fa fa fa-linkedin-square'></i>
                            </a>
                            <a href="https://twitter.com/SeydouB54909610">
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href="https://github.com/seydouba95">
                                <i className='fa fa-github'></i>
                            </a>
                        </div>

                    </div>
                    <div className="profile-details-name">
                        <span className="primary text">
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Seydou Ba</span>

                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 😎  ",
                                        1000,
                                        "Full Stack  Developer 💻 ",
                                        1000,
                                        "MERN Stack Dev 🔴  ",
                                        1000,
                                        "Android/Flutter Dev 📱 ",
                                        1000,
                                    ]}

                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Ability of building applications with front-end and back-end
                                operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' 
                        onClick={()=> ScrollService.scrollHandler.scrollToHireMe()} >Hire Me</button>
                        <a href='seydouResume.pdf' download='seydouResume.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>

                    <div className='profile-picture-background'></div>
                </div>
            </div>


        </div>
    );
}
