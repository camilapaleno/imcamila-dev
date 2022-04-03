import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from "react-dom";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import App from './App';
import Portfolio from "./pages/Portfolio";
import Code from "./pages/Code";
import Me from "./pages/Me";


ReactDOM.render(

  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/code" element={<Code />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  </Router>,
  
document.getElementById('root')
);


