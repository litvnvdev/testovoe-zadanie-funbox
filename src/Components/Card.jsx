import React from 'react';
import imgCat from '../img/cat.png';
import '../css/Card.css';

const Card = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="card">
          <div className="container">
            <div className="card__row">
              <div className="card__body">
                <div className="card__subtitle">
                  <h2>Сказочное заморское яство</h2>
                </div>
                <div className="card__title">
                  <h1>
                    Нямушка <p className="flavour">с фуа-гра</p>
                  </h1>
                </div>
                <div className="card__description">
                  <p>
                    10 порций <br /> мышь в подарок
                  </p>
                </div>
              </div>
              <div className="card__image">
                <img src={imgCat} alt="cat" />
              </div>
            </div>
            <p>
              Чего сидишь? Порадуй, котэ{' '}
              <a href="#" target="_blank" rel="noreferrer">
                купи.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
