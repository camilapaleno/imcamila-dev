import React from 'react';
import { Link } from 'react-router-dom';

function Card(prop) {
  return (
    <>
      <li className='card'>
        <Link className='card_link' to={prop.path}>
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
        </Link>
      </li>
    </>
  );
}

export default Card;