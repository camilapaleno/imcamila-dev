import React from 'react';
import '../index.css';
import '../components/Cards.css'
import Card from '../components/Card';

import Sample from '../img/test.png';
import ContactForm from '../img/code-contactform.gif';
import DarkMode from '../img/code-darkmode.gif';
import ToTop from '../img/code-totop.gif';

function CodeDeck () {
    return (
        <div className='cards_container'>
            <div className='cards'>
                <ul>
                    <Card
                        src={ContactForm}
                        text='Simple Responsive Contact Form'
                        label='HTML & CSS'
                        color='purple'
                        description='A contact form with a cool label transition on field click.'
                        path='https://codepen.io/camilapaleno/pen/ZEvpJYB'
                    />   
                    <Card
                        src={DarkMode}
                        text='Easy Dark Mode'
                        label='Javascript'
                        color='purple'
                        description='Dark mode using CSS :root and HTML data-themes.'
                        path='https://codepen.io/camilapaleno/pen/jOYMLyr'
                    />  
                    <Card
                        src={ToTop}
                        text='To Top Button'
                        label='Javascript'
                        color='purple'
                        description='A simple button that appears halfway down the screen and takes you to the top of the page.'
                        path='https://codepen.io/camilapaleno/pen/dyJzaGN'
                    />  
                    <Card
                        src={Sample}
                        text='Hi'
                        label='Hi'
                        color='purple'
                        description='More Pens Coming Very Soon'
                        path=''
                    />  
                </ul>
            </div>
        </div>
    )
}

export default CodeDeck;