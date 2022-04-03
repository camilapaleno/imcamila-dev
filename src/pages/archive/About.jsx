import React, { useRef } from 'react';
import {useState} from 'react';
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Foot from '../Foot';

import '../../index.css';
import logo from '../../img/logo.png';
import Logo from '../../img/logo-bw.png';

function About () {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
      setNavbarOpen(prev => !prev)
    }

    return (
        <main data-theme={theme}>
            <Helmet>
                <script src="https://kit.fontawesome.com/3d80b76294.js" crossorigin="anonymous"></script>
            </Helmet>
            <div className="nav-wdgts">
                <div className="nav-wdgts-container">
                    <div className="wdgt-mode">
                        <button onClick={switchTheme}><span className="mode-icon"><i className="fas fa-moon"></i></span><span className="nav-wdgts-title"> {theme === 'light' ? 'Dark' : 'Light'} Mode</span></button>
                    </div>
                    <div className="hamburger">
                        <button onClick={handleToggle}><i className="fas fa-bars"></i></button>
                    </div>                 
                </div>
            </div>
            <div className="navigation">
                <div className="top-bar">
                    <div className="top-bar-container">
                        <div className="top-logo">
                            <Link to="/"><img src={Logo} /><h1>camila web dev.</h1></Link>
                        </div>
                    </div>
                </div>

                <div className={`main-nav nav ${navbarOpen ? " show-main-nav" : ""}`}>
                    <div className="main-nav-container">
                        <div className="nav-links">
                            <ul>
                                <li className="nav-link"><Link to="/"><i className="fas fa-home"></i>  Home</Link>
                                </li>
                                <li className="nav-link"><Link to="/portfolio"><i className="fas fa-palette"></i>  Portfolio</Link>
                                </li>
                                <li className="nav-link"><Link to="/code"><i className="fas fa-code"></i>  Source Code</Link>
                                </li>
                                <li className="nav-link"><Link to=""><i className="fas fa-smile"></i>  Me</Link>
                                    <div className="dropdown">
                                        <ul className="dropdown-list-type">
                                            <li>
                                                <ul>
                                                    <li>
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact">Contact</Link>
                                                    </li>
                                                </ul>
                                            </li>                                
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-offset"></div>
            <section className='about-page'>
                
                <div className='page-header'>
                    <span>About Me</span>
                </div>
                <div className='page-paragraph'>
                    <p>My name is Camila Paleno. I was born in Los Angeles and attended UCLA.</p>
                    <p>I have a lot of experience working with brands and businesses. I started out taking product and portrait photos, and soon transitioned into social media marketing and content creation.</p>
                    <p>At the end of 2019, I began taking courses at UCLA for backend code including C++ and Java. I realized that I could bring my interest in design and development together with frontend web development.</p>
                    <p>I graduated from UCLA in June 2021 and currently work as a frontend developer for the Neuroscience Education Institute along with freelance web development and graphic design.</p>
                    <p>This website was designed with Adobe xD and built with React.js.</p>
                    <p>Linkedin Github</p>
                </div>
                <div className='about-logo'>
                    <img src={Logo} />
                </div>

            </section>

            <svg xmlns="http://www.w3.org/2000/svg" className='page-curve' viewBox="0 0 1440 340" preserveAspectRatio="slice" height="50%" width="100%">
                <path fill-opacity="1" d="m0,124.85781l48,15.76185c48,15.76185 144,47.28555 240,63.0474c96,15.76185 192,15.76185 288,10.54073c96,-5.61515 192,-15.46631 288,-47.28554c96,-31.22817 192,-84.42441 288,-105.11184c96,-20.68742 192,-10.83627 240,-5.22111l48,5.22111l0,439.18959l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -193,8 -289,8c-96,0 -191,1 -287,1c-79.66667,0 -159.33333,0 -239,0c-16.33333,0 -32.66667,0 -49,0" />
            </svg>

            <Foot />

        </main>
    )
}

export default About;