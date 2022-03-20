import React from "react";
import useLocalStorage from 'use-local-storage'
import {Helmet} from "react-helmet";
import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/home/Hero";
import Banner from "./components/home/Banner";
import Design from "./components/home/Design";
import Code from "./components/home/Code";
import Ask from "./components/home/Ask";
import Foot from "./components/Foot";


export default function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <main data-theme={theme}>
      <Helmet>
        <script type="text/javascript" src="/___vscode_livepreview_injected_script"></script>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src="https://kit.fontawesome.com/3d80b76294.js" crossorigin="anonymous"></script>
        <title>Camila Paleno | Web Design and Development in Los Angeles</title>

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
                <a href="#"><i className="fas fa-bars"></i></a>
            </div>                 
        </div>
      </div>
      <Nav />
      <div className="nav-offset"></div>
      <Hero />
      <Banner />
      <Design />
      <Code />
      <Ask />
      <Foot />
    </main>
  );
}



