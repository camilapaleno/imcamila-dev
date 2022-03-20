import React from 'react';
import '../../index.css';
import '../portfolio/Cards.css'
import Card from './Card';
import Sample from '../../img/test.png'

function CodeDeck () {
    return (
        <div className='cards_container'>
            <div className='cards'>
                <ul>
                    <Card
                        src={Sample}
                        text='Simple Responsive Navbar'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />   
                    <Card
                        src={Sample}
                        text='Modern Agenda with Filter'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />   
                    <Card
                        src={Sample}
                        text='Vertical Gradient Timeline'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />   
                    <Card
                        src={Sample}
                        text='L.A. Musicians'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />   
                    <Card
                        src={Sample}
                        text='L.A. Musicians'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />                        

                    <Card
                        src={Sample}
                        text='L.A. Musicians'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />    
                                        <Card
                        src={Sample}
                        text='L.A. Musicians'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />    
                                        <Card
                        src={Sample}
                        text='L.A. Musicians'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />    
                                        <Card
                        src={Sample}
                        text='L.A. Musicians'
                        label='Portrait'
                        color='purple'
                        description='For album covers and social media.'
                        path='/lamusicians'
                    />    
                </ul>
            </div>
        </div>
    )
}

export default CodeDeck;