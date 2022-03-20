// src/components/home/Design.js

export default function Design() {
    return (
    <section className='home-flex-section-wrapper' id='home-design'>
        <div className='home-flex-section'>
            <div className='home-flex-item home-flex-text'>
                <span className="home-small-header">UI/UX Design</span>
                <br/><br/>
                <span className="home-big-header">Using web design to tell a story.</span>
                <br/><br/>
                <span className="home-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ullamcorper justo. Sed ex orci, dignissim in mi sed, finibus facilisis enim. Ut placerat, arcu ac ornare tempus, felis nibh efficitur magna, in rhoncus lacus leo eget ipsum. </span>
            </div>
            <div className='home-flex-item home-flex-image home-design'> 
                
            </div>
        </div>
        <div className='home-flex-section'>
            <div className='home-flex-item home-flex-buttons'>
                <span>Design Tools</span>
                <br/><br/>
                <span>In order to design a website and all of it's components, I use Adobe Tools such as:</span>
                <br/><br/>
                <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noopener noreferrer" className='home-flex-button'>Adobe Xd</a>
                <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer" className='home-flex-button'>Adobe Illustrator</a>
                <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer" className='home-flex-button'>Adobe Photoshop</a>
            </div>
            <div className='home-flex-item home-flex-buttons'>
                <span>Lottie Animations</span>
                <br/><br/>
                <span>I use After Effects and Lottie Files to create simple animations (like the ones on this website).</span>
                <br/><br/>
                <a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noopener noreferrer" className='home-flex-button'>After Effects</a>
                <a href="https://lottiefiles.com/" target="_blank" rel="noopener noreferrer" className='home-flex-button'>Bodymovin</a>
                <a href="https://lottiefiles.com/" target="_blank" rel="noopener noreferrer" className='home-flex-button'>Lottie Files</a>
            </div>
            <div className='home-flex-item home-flex-buttons'>
                <span>Website Builders</span>
                <br/><br/>
                <span>In some circumstances, I recommend clients a website builder. I have experience with:</span>
                <br/><br/>
                <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className='home-flex-button'>Shopify</a>
                <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer" className='home-flex-button'>WordPress</a>
                <a href="https://www.squarespace.com/" target="_blank" rel="noopener noreferrer" className='home-flex-button'>Squarespace</a>
            </div>
        </div>
    </section>
    );
}