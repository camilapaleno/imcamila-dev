import React, {useState} from "react";
import useLocalStorage from 'use-local-storage';
import { AnimatePresence } from "framer-motion";
import {  BrowserRouter as Router,  Routes,  Route, useLocation} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Code from "./pages/Code";
import Me from "./pages/Me";

export default function App() {
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
  
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/imcamila-dev/" element={<Home />} />
        <Route path="/imcamila-dev/portfolio" element={<Portfolio />} />
        <Route path="/imcamila-dev/code" element={<Code />} />
        <Route path="/imcamila-dev/me" element={<Me />} />
      </Routes>
    </AnimatePresence>
  );
}



