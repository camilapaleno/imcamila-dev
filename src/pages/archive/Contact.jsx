import React, {useRef} from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import useLocalStorage from 'use-local-storage';
import emailjs from 'emailjs-com';
import Foot from '../Foot';

import '../../index.css';
import logo from '../../img/logo.png';
import Logo from '../../img/logo.png'

function Contact () {
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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_zgb6s6o",
            "template_hdem4sz",
            form.current,
            "tLx_f2mjmfgSqEaU8"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("SUCCESS!");
            },
            (error) => {
              console.log(error.text);
              alert("FAILED...", error);
            }
          );
      };

    return (
        <main data-theme={theme}>
            <Helmet>

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
                            <Link to="/"><img src={logo} /><h1>camila web dev.</h1></Link>
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
            <section className='contact-page'>
                <div className='page-header'>
                    <span>Contact Me</span>
                </div>
                <div className='contact-form-container'>
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        
                        <div className='contact-field-container'>
                            <input type="text" name="user_name" className='contact-field' required />
                            <span className='contact-placeholder'>Name</span>
                        </div>
                        
                        <div className='contact-field-container'>
                            <input type="email" name="user_email" className='contact-field' required />
                            <span className='contact-placeholder'>Email</span>
                        </div>
                        
                        <div className='contact-field-container'>
                            <textarea name="message" className='contact-field' required />
                            <span className='contact-placeholder'>Message</span>
                        </div>
                        
                        
                        <input type="submit" value="Send" className='contact-submit' />
                    </form>                    
                </div>

                </section>


            <svg xmlns="http://www.w3.org/2000/svg" className='page-curve' viewBox="0 0 1440 340" preserveAspectRatio="none" height="50%" width="100%">
                <path fill-opacity="1" d="m0,124.85781l48,15.76185c48,15.76185 144,47.28555 240,63.0474c96,15.76185 192,15.76185 288,10.54073c96,-5.61515 192,-15.46631 288,-47.28554c96,-31.22817 192,-84.42441 288,-105.11184c96,-20.68742 192,-10.83627 240,-5.22111l48,5.22111l0,439.18959l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -193,8 -289,8c-96,0 -191,1 -287,1c-79.66667,0 -159.33333,0 -239,0c-16.33333,0 -32.66667,0 -49,0" />
            </svg>

            <Foot />
        </main>
    )
}

export default Contact;