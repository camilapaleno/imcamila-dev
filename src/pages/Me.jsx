import React, {useRef} from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import useLocalStorage from 'use-local-storage';
import emailjs from 'emailjs-com';
import '../index.css';

import Foot from '../global/Foot';

import logo from '../img/logo-bw.png';

function Me () {
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
              alert("Message sent. Thank you!");
            },
            (error) => {
              console.log(error.text);
              alert("Message was not sent. Try again or send me an email instead.", error);
            }
          );
      };

    return (
        <main data-theme={theme}>
            <Helmet>
                <script type="text/javascript" src="/___vscode_livepreview_injected_script"></script>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <script src="https://kit.fontawesome.com/3d80b76294.js" crossorigin="anonymous"></script>
                <title>About Me | Camila Paleno | Web Design and Development in Los Angeles</title>

                <meta property="og:image" content="#" />
                <meta name="description" content="Clean and modern website design and development." />
                <meta property="og:title" content="Web Design and Development in Los Angeles"/>
                <meta property="og:url" content="https://www.imcamila.dev" />
                <meta property="og:description" content="Clean and modern website design and development." />
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
                                    <div className="dropdown">
                                        <div className="dropdown-triangle"></div>
                                        <span>See work I've done for past/current clients.</span>
                                    </div>
                                </li>
                                <li className="nav-link"><Link to="/code"><i className="fas fa-code"></i>  Source Code</Link>
                                    <div className="dropdown">
                                        <div className="dropdown-triangle"></div>
                                        <span>Code for you to use for your projects.</span>
                                    </div>
                                </li>
                                <li className="nav-link"><Link to="/me"><i className="fas fa-smile"></i>  Me</Link>
                                    <div className="dropdown">
                                        <div className="dropdown-triangle"></div>
                                        <span>Contact information here.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-offset"></div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <section className='me-page'>
                <div className='page-header'>
                    <span>About Me</span>
                </div>

                <div className='me-page-container'>

                    <section className='about-container'>
                    
                        <div className='page-paragraph'>
                            <p>My name is Camila Paleno. I was born in Los Angeles and attended UCLA.</p>
                            <p>I have a lot of experience working with brands and businesses. I started out taking product and portrait photos, and soon transitioned into social media marketing and content creation.</p>
                            <p>At the end of 2019, I began taking courses at UCLA for backend code including C++ and Java. I realized that I could bring my interest in design and development together with frontend web development.</p>
                            <p>I graduated from UCLA in June 2021 and currently work as a frontend developer for the Neuroscience Education Institute along with freelance web development and graphic design.</p>
                            <p>This website was designed with Adobe Xd and built with React.js. Check out my Linkedin, Github, and Codepen:</p>
                            <p className='me-page-icons'>
                                <a href='https://www.linkedin.com/in/camilapaleno/'><i class="fab fa-linkedin-in"></i></a>
                                <a href='https://codepen.io/camilapaleno'><i class="fab fa-codepen"></i></a>
                                <a href='https://github.com/camilapaleno'><i class="fab fa-github"></i></a>
                            </p>
                            <p>You can also <a href='#' target='_blank'>download my resume</a>.</p>
                        </div>

                    </section>

                    <div className='contact-container'>

                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className='page-paragraph'>
                                <p>My email is <a href='mailto:imcamila.dev'>hi@imcamila.dev</a>. Feel free to reach out to me! You can also send me a message this way:</p>
                            </div>

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
                            
                            
                            <button type="submit"  className='contact-submit' >Send <i class="fas fa-paper-plane"></i></button>
                        </form>                    
                    </div>

                </div>
            </section>
            </motion.div>


            <svg xmlns="http://www.w3.org/2000/svg" className='page-curve' viewBox="0 0 1440 340" preserveAspectRatio="none" height="50%" width="100%">
                <path fill-opacity="1" d="m0,124.85781l48,15.76185c48,15.76185 144,47.28555 240,63.0474c96,15.76185 192,15.76185 288,10.54073c96,-5.61515 192,-15.46631 288,-47.28554c96,-31.22817 192,-84.42441 288,-105.11184c96,-20.68742 192,-10.83627 240,-5.22111l48,5.22111l0,439.18959l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -193,8 -289,8c-96,0 -191,1 -287,1c-79.66667,0 -159.33333,0 -239,0c-16.33333,0 -32.66667,0 -49,0" />
            </svg>

            <Foot />
        </main>
    )
}

export default Me;