import { useMemo } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
  const cardData = useMemo(
    () => [
      {
        id: 1,
        title: 'с фуа-гра',
        weight: '0,5',
        portion: '10',
        mouse: 'мышь ',
        description: 'Чего сидишь? Порадуй, котэ',
      },
      {
        id: 2,
        title: 'с рыбой',
        weight: '2',
        portion: '40',
        mouse: ' 2 мыши',
        description: 'Головы шучьи с чесноком да свежайшая сёмгушка.',
      },
      {
        id: 3,
        title: 'с курой',
        weight: '5',
        portion: '100',
        mouse: '5 мышей ',
        description: 'Печалька, с курой закончился.',
      },
    ],
    [],
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>Ты сегодня покормил кота?</p>
      </header>
      <div className="flex-container">
        {cardData.map(({ title, weight, id, portion, mouse, description }) => (
          <div key={id}>
            <Card title={title} weight={weight} id={id} portion={portion} mouse={mouse} />
            <p className="call-to-action-text">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
