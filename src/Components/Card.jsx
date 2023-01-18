import React from 'react';
import imgCat from '../img/cat.png';
import '../css/Card.css';

const Card = () => {
  const cardData = {
    cardOne: {
      title: 'с фуа-гра',
      weight: '0,5',
      portion: '10',
    },
    cardTwo: {
      title: 'с рыбой',
      weight: '2',
      portion: '40',
      mouse: '2',
    },
    cardThree: {
      title: 'с курой',
      weight: '0,5',
      portion: '100',
      mouse: '5',
    },
  };
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
                    Нямушка <p className="flavour">{cardData.cardOne.title}</p>
                  </h1>
                </div>
                <div className="card__description">
                  <p>
                    <b>{cardData.cardOne.portion} </b>порций <br /> мышь в подарок
                  </p>
                </div>
              </div>
              <span className="dot">
                {' '}
                <p className="dot-text">
                  {cardData.cardOne.weight} <br />
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
      <p className="call-to-action-text">
        Чего сидишь? Порадуй, котэ{' '}
        <a href="#" target="_blank" rel="noreferrer">
          купи.
        </a>
      </p>
    </div>
  );
};

export default Card;
