import React from 'react';
import '../../index.css';
import '../portfolio/Cards.css'
import Card from './Card';
import Sample from '../../img/test.png';
import NEI from '../../img/portfolio-nei.png';
import BPS from '../../img/portfolio-bps.png';
import Blue from '../../img/portfolio-blue.png';
import Gal from '../../img/portfolio-gal.png';
import BXB from '../../img/portfolio-bxb.png';
import NN from '../../img/portfolio-nn.png';

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
                        path='/'
                    />   
                    <Card
                        src={Blue}
                        text='Blue Window Boutique Villas'
                        label='HTML & CSS'
                        color='purple'
                        description='Villas in Junquillal, Costa Rica.'
                        path='/'
                    />   
                    <Card
                        src={BPS}
                        text='Bruin Polyglot Society'
                        label='React.js'
                        color='purple'
                        description='UCLAs premier language learning organization.'
                        path='/'
                    />   

                    
                    <Card
                        src={BXB}
                        text='BXB Beanie Ball'
                        label='HTML & CSS'
                        color='purple'
                        description='Sports attire company.'
                        path='/'
                    />    
                    <Card
                        src={Gal}
                        text='Gal &amp; Co'
                        label='Squarespace'
                        color='purple'
                        description='Clothing Boutique based in L.A..'
                        path='/'
                    />  

                    <Card
                        src={NN}
                        text='Nippon Niche'
                        label='Wordpress'
                        color='purple'
                        description='Japanese media and products.'
                        path='/'
                    />   
                    
  
                </ul>
            </div>
        </div>
    )
}

export default PortfolioDeck;