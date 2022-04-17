// src/components/home/Banner.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting, faLaptopCode, faMugHot, faObjectGroup, faRocket } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Banner() {

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const [hoveredUXUI, setHoveredUXUI] = useState(false);
    const toggleHoverUXUI = () => setHoveredUXUI(!hoveredUXUI);
    const [hoveredGraphic, setHoveredGraphic] = useState(false);
    const toggleHoverGraphic = () => setHoveredGraphic(!hoveredGraphic);
    const [hoveredAnim, setHoveredAnim] = useState(false);
    const toggleHoverAnim = () => setHoveredAnim(!hoveredAnim);
    const [hoveredDev, setHoveredDev] = useState(false);
    const toggleHoverDev = () => setHoveredDev(!hoveredDev);
    const [hoveredL, setHoveredL] = useState(false);
    const toggleHoverL = () => setHoveredL(!hoveredL);


    return (
        <section className='banner-section-wrapper'>
        <div className='banner-section'>
            <div className='banner-title'>
                <span>Some things I'm good at:</span>
            </div>
            <div className='banner-icons'>
                <a href='#home-design' className='banner-icon'>
                    <i
                        className={hoveredUXUI ? 'fa-solid fa-object-group' : 'fa-solid fa-object-group'}
                        onMouseEnter={toggleHoverUXUI}
                        onMouseLeave={toggleHoverUXUI}
                    >
                    </i>
                    <span>UX/UI Design</span>
                </a>
                <a href='#home-design' className='banner-icon'>
                <i
                        className={hoveredGraphic ? 'fa-solid fa-compass-drafting' : 'fa-solid fa-compass-drafting'}
                        onMouseEnter={toggleHoverGraphic}
                        onMouseLeave={toggleHoverGraphic}
                    >
                    </i>
                    <span>Graphic Design</span>
                </a>
                <a href='#home-design' className='banner-icon'>
                    <i
                        className={hoveredAnim ? 'fa-solid fa-rocket fa-flip' : 'fa-solid fa-rocket fa-flip'}
                        onMouseEnter={toggleHoverAnim}
                        onMouseLeave={toggleHoverAnim}
                    >
                    </i>
                    <span>Animations</span>
                </a>
                <a href='#home-code' className='banner-icon'>
                    <i
                        className={hoveredDev ? 'fa-solid fa-laptop-code' : 'fa-solid fa-laptop-code'}
                        onMouseEnter={toggleHoverDev}
                        onMouseLeave={toggleHoverDev}
                    >
                    </i>
                    <span>Frontend Development</span>
                </a>
                <Link to="/me" className='banner-icon'>
                    <i
                        className={hoveredL ? 'fa-solid fa-mug-hot' : 'fa-solid fa-mug-hot'}
                        onMouseEnter={toggleHoverL}
                        onMouseLeave={toggleHoverL}
                    >
                    </i>
                    <span>Listening</span>
                </Link>
            </div>
        </div>
    </section>
    );
}