// src/components/Nav.js
import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="navigation-cpv1">
        <div className="navigation-cpv1-container">

            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-logo">
                        <Link to="/index"><h1>camila web dev.</h1></Link>
                    </div>
                </div>
            </div>

            <div className="main-nav nav">
                <div className="main-nav-container">
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link"><Link to="/"><i className="fas fa-home"></i>  Home</Link>
                            </li>
                            <li className="nav-link"><Link to={"/portfolio"}><i className="fas fa-palette"></i>  Portfolio</Link>
                            </li>
                            <li className="nav-link"><Link to="/code"><i className="fas fa-code"></i>  Source Code</Link>
                                <div className="dropdown">
                                    <ul className="dropdown-list-type">
                                        <li>
                                            <ul>
                                                <li>
                                                    <Link to="/">Simple Responsive Navbar</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Modern Agenda with Filter</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Vertical Gradient Timeline</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">See All</Link>
                                                </li>
    
                                            </ul>
                                        </li>                                
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-link"><Link to="/"><i className="fas fa-smile"></i>  Me</Link>
                                <div className="dropdown">
                                    <ul className="dropdown-list-type">
                                        <li>
                                            <ul>
                                                <li>
                                                    <Link to="/">About</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">Contact</Link>
                                                </li>
                                                <li>
                                                    <Link to="/">General Resume</Link>
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
        </div>
    );
}
