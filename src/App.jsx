import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Convert Currency</h1>
      </header>
      <div className='Main'>
        <main>
          <h2>🇻🇳 VND</h2>
          <Converter />
        </main>
      </div>
    </div>
  );
}

export default App;

function Converter () {
  [base, setBase] = useState("USD")
  [target, setTarget] = useState("EUR")
  [amount, setAmount] = useState(1)


  return (
    <>
      <input type='text' placeholder={amount} />
      <select className='select-base'>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="MYR">MYR</option>
      </select>
      <h3>Output</h3>
    </>
  )

}