import React from 'react';
import '../index.css';
import '../components/Cards.css'
import Card from '../components/Card';

import NEI from '../img/portfolio-nei.png';
import BPS from '../img/portfolio-bps.png';
import Blue from '../img/portfolio-blue.png';
import Gal from '../img/portfolio-gal.png';
import BXB from '../img/portfolio-bxb.png';
import NN from '../img/portfolio-nn.png';


function PortfolioDeck () {
    return (
        <div className='cards_container'>
            <div className='cards'>
                <ul>
                    <Card
                        src={NEI}
                        text='Neuroscience Education Institute'
                        label='HTML & CSS'
                        color='purple'
                        description='Continuing medical education company.'
                        path='https://www.behance.net/gallery/140716121/Neuroscience-Education-Institute-Website'
                    />   
                    <Card
                        src={Blue}
                        text='Blue Window Boutique Villas'
                        label='HTML & CSS'
                        color='purple'
                        description='Villas in Junquillal, Costa Rica.'
                        path='https://www.behance.net/gallery/140716451/Blue-Window-Website'
                    />   
                    <Card
                        src={BPS}
                        text='Bruin Polyglot Society'
                        label='React.js'
                        color='purple'
                        description='UCLAs premier language learning organization.'
                        path='https://www.behance.net/gallery/140716571/Bruin-Polyglot-Society-Website'
                    />   

                    
                    <Card
                        src={BXB}
                        text='BXB Beanie Ball'
                        label='HTML & CSS'
                        color='purple'
                        description='Sports attire company.'
                        path='https://www.behance.net/gallery/140647251/BXB-Beanie-Ball'
                    />    
                    <Card
                        src={Gal}
                        text='Gal &amp; Co'
                        label='Squarespace'
                        color='purple'
                        description='Clothing Boutique based in L.A..'
                        path='https://www.behance.net/gallery/140716343/Gal-Co-Website'
                    />  

                    <Card
                        src={NN}
                        text='Nippon Niche'
                        label='Wordpress'
                        color='purple'
                        description='Japanese media and products. Preview Coming Soon.'
                        path='/'
                    />   
                    
  
                </ul>
                
            </div>
        </div>
    )
}

export default PortfolioDeck;