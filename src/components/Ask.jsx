// src/components/Ask.js
import React from "react";
import { Link } from 'react-router-dom';


export default function Ask() {
    return (
    <section className='home-text-section-wrapper' id='home-ask'>
        <div className="ask-container">
            <div className="ask">
                <span>Want to work together? Have any questions? <Link to="/me" className="ask-btn">Contact me! <i class="fa-solid fa-mug-hot"></i></Link> </span>
            </div>
        </div>
    </section>
    );
}