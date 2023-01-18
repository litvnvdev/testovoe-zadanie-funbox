import React from 'react';
import imgCat from '../img/cat.png';
import '../css/Card.css';

const Card = ({ title, weight, portion, mouse }) => {
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
                    Нямушка <p className="flavour">{title}</p>
                  </h1>
                </div>
                <div className="card__description">
                  <p>
                    <b>{portion} </b>порций <br /> {mouse} в подарок
                  </p>
                </div>
              </div>
              <span className="dot">
                {' '}
                <p className="dot-text">
                  {weight} <br />
                  <span>кг</span>
                </p>
              </span>
              <div className="card__image">
                <img src={imgCat} alt="cat" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className="call-to-action-text">
        <a href="#" target="_blank" rel="noreferrer">
          купи.
        </a>
      </p> */}
    </div>
  );
};

export default Card;
