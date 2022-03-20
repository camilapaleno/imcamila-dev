import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from "react-dom";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import App from './App';
import Portfolio from "./components/routes/Portfolio";
import Code from "./components/routes/Code";


ReactDOM.render(

  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/code" element={<Code />} />
    </Routes>
  </Router>,
  
document.getElementById('root')
);


