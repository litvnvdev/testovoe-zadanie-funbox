import './App.css';
import Card from './Components/Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Ты сегодня покормил кота?</p>
      </header>
      <div className="flex-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
