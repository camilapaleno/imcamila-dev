import Dino from '../img/dinosaur.gif';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import meLottie from "../anim/desk.json";

export default function MeHero() {
    return (
    <section className='mehero-section-wrapper'>
        <div className='mehero-section'>

            <div className='mehero-text'>
                <div className='mehero-text-container'>
                    <span className="mehero-big-header">hello!</span>

                    <span className="mehero-small-text">My name is Camila. I'm a web designer and developer based in Los Angeles, CA. <br /><br /> I specialize in creating and fine-tuning business' online presence through content creation, social media marketing, SEO, and of course, building websites. </span> 
                    
                    <Link to="/me" className="ask-btn">Contact me! <i class="fa-solid fa-mug-hot"></i></Link>
                </div>
            </div>
            <div className='mehero-image'>
                <Lottie animationData={meLottie} loop={true} className="mehero-lottie" />
            </div>

        </div>
    </section>
    );
}
