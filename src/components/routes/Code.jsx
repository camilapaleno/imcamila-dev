import React from 'react';
import '../../index.css';
import Nav from '../Nav';
import CodeDeck from '../portfolio/CodeDeck'
import Foot from '../Foot'

import useLocalStorage from 'use-local-storage'
import {Helmet} from "react-helmet";

function Code () {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }

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
                    <a href="#"><i className="fas fa-bars"></i></a>
                </div>                 
            </div>
            </div>
            <Nav />
            <section className='portfolio-page'>
                <div className="nav-offset"></div>
                <div className='page-header'>
                    <span>Source Code</span>
                </div>
                <CodeDeck />
            </section>
            <Foot />

        </main>
    )
}

export default Code;