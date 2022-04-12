// src/components/home/Code.js
import Lottie from "lottie-react";
import codeLottie from "../anim/Code-gradient.json";

export default function Code() {
    return (
        <section className='home-flex-section-wrapper' id='home-code'>
        <div className='home-flex-section'>
            <div className='home-flex-item home-flex-image home-code'> 
                <Lottie animationData={codeLottie} loop={true} className="home-lottie"/>
            </div>
            <div className='home-flex-item home-flex-text'>
                <span className="home-small-header">Frontend Development</span>
                <br/><br/>
                <span className="home-big-header">Efficient, contemporary, and clean code.</span>
                <br/><br/>
                <span className="home-text">Web development has come a long way. It's crucial to keep up with the <em>current</em> best practices and trends in development.</span>
            </div>            


            <div className='home-flex-section'>
                <div className='home-flex-item home-flex-icon-texts'>
                    <span><i class="fa-brands fa-html5"></i> HTML &amp; CSS</span>
                    <br/><br/>
                    <span>HTML to create the framework, and CSS to style the HTML. Styling with CSS is one of my favorite things to do and I have a <em>strong</em> attention to detail. </span>
                </div>
                <div className='home-flex-item home-flex-icon-texts'>
                    <span><i class="fa-brands fa-js-square"></i> Javascript</span>
                    <br/><br/>
                    <span>Javascript to make stuff happen. For example, when you click on Moon icon (upper right), lights go off. Try it.</span>
                </div>
                <div className='home-flex-item home-flex-icon-texts'>
                    <span><i class="fa-brands fa-github"></i> Github</span>
                    <br/><br/>
                    <span>I use Github to keep everything organized and Github pages to host websites when I can.</span>
                </div>
                <div className='home-flex-item home-flex-icon-texts'>
                    <span><i class="fa-brands fa-react"></i> React.js</span>
                    <br/><br/>
                    <span>I've used the Javascript library React.js for my recent projects. I've been loving the ability to reuse components and the ease of use. React definitely has my <i class="fas fa-heart"></i>.</span>
                </div>
            </div>
        </div>
    </section>
    );
}