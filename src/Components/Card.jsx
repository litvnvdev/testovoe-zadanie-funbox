import React, { useState } from 'react';
import imgCat from '../img/cat.png';
import '../css/Card.css';

const Card = ({ title, weight, portion, mouse }) => {
  const [selectBorderCard, setSelectBorderCard] = useState('not-active');
  const [selectDotCard, setSelectDotCard] = useState('blue');

  const colorOfActiveCard = () => {
    {
      /*Select Border Card color*/
    }
    if (selectBorderCard === 'not-active') {
      setSelectBorderCard('active');
    } else if (selectBorderCard === 'active') {
      setSelectBorderCard('not-active');
    }

    {
      /*Select dot color*/
    }

    if (selectDotCard === 'blue') {
      setSelectDotCard('pink');
    } else if (selectDotCard === 'pink') {
      setSelectDotCard('blue');
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className={`card ${selectBorderCard}`} onClick={colorOfActiveCard}>
          <div className="container">
            <div className="card__row">
              <div className="card__body">
                <div className="card__subtitle">
                  <h3>Сказочное заморское яство</h3>
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
              <span className={`dot ${selectDotCard}`}>
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
    </div>
  );
};

export default Card;
