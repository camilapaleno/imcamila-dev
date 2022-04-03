import React from 'react';
import { Link } from 'react-router-dom';

function Card(prop) {
  return (
    <>
      <li className='card'>
        <a className='card_link' href={prop.path} target="_blank">
          <figure className='card_img_container' id={prop.color} data-category={prop.label}>
            <img
              className='cards_img'
              alt='Preview'
              src={prop.src}
            />
          </figure>
          <div className='card_info'>
            <h5 className='card_info_text'>{prop.text}</h5>
            <p className='cards_info_description'>{prop.description}</p>
          </div>          
        </a>
      </li>
    </>
  );
}

export default Card;