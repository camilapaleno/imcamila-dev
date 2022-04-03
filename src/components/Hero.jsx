import Dino from '../img/dinosaur.gif';
import { Link } from 'react-router-dom';
// src/components/home/Hero.js

export default function Hero() {
    return (
    <section className='hero-section-wrapper'>
        <div className='hero-section'>
            <div className='hero-image light-hero'>
                <img src={Dino} className='dinosaur' />
            </div>
            <div className='hero-text'>
                <p>

                <br/>
                <span className="hero-big-header">hello!</span>
                <br/><br/>
                <span className="hero-small-text">My name is Camila. I'm a web designer and developer based in Los Angeles, CA. I specialize in creating and fine-tuning business' online presence through content creation, social media marketing, SEO, and of course, building websites. </span> 
                <br/><br/><br/><br/>
                <Link to="/me" className="ask-btn">Contact me! <i class="fa-solid fa-mug-hot"></i></Link>
                <br /><br /><br />
                </p>
                
            </div>
        </div>
    </section>
    );
}
