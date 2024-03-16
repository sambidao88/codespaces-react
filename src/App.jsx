import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Convert Currency</h1>
        <div className='Main'>
          <h2>🇻🇳</h2>
          <Converter />
      </div>
      </header>
    </div>
  );
}

export default App;

function Converter() {
  const [base, setBase] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [data, setData] = useState()

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  const handleTargetChange = (event) => {
    setTarget(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect( 
    async function fectchCurrency () {
      const res = await fectch('https://api.frankfurter.app/latest?base=MYR');
      const data = await res.json()
      setData(data)
    }
    ,[])

  return (
    <>
      <input type='text' value={amount} onChange={handleAmountChange} placeholder={amount} />
      <select className='select-base' value={base} onChange={handleBaseChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="MYR">MYR</option>
      </select>
      <h3>Output</h3>
    </>
  );
}
