import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const decrease = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <p className="compteur_txt">Compteur</p>
      <p className="compteur"> {count} </p>
      <div className="Buttons">
        <button className="ButtonMoins" onClick={decrease}>-</button>
        <button className="ButtonReset" onClick={() => setCount(0)}>Reset</button>
        <button className="ButtonPlus" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
