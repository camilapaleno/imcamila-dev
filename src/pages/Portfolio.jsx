import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import useLocalStorage from 'use-local-storage';
import '../index.css';

import PortfolioDeck from '../components/PortfolioDeck';
import Foot from '../global/Foot';

import logo from '../img/logo-bw.png';

function Portfolio () {
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
                <script type="text/javascript" src="/___vscode_livepreview_injected_script"></script>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <script src="https://kit.fontawesome.com/3d80b76294.js" crossorigin="anonymous"></script>
                <title>Portfolio | Camila Paleno | Web Design and Development in Los Angeles</title>

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
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <section className='portfolio-page'>
                <div className="nav-offset"></div>
                <div className='page-header'>
                    <span>Web Design &amp; Dev. Portfolio</span>
                </div>
                <PortfolioDeck />
            </section>
            </motion.div>
            <Foot />
        </main>
    )
}

export default Portfolio;