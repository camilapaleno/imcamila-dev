import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from "react-dom";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import { AnimatePresence, useLocation } from "framer-motion";

import App from './App';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Code from "./pages/Code";
import Me from "./pages/Me";



ReactDOM.render(

  <Router>
    <App />
  </Router>,

document.getElementById('root')
);


