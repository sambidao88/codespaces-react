import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Convert Currency</h1>
        <div className='Main'>
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

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const res = await fetch('https://api.frankfurter.app/latest?base=MYR');
        if (!res.ok) throw new Error("Cannot fetch URL: https://api.frankfurter.app/latest?base=MYR");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCurrency(); // Call fetchCurrency function
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <>
      {data && (
        <h2>{data.date}</h2>
      )}
      <input type='text' value={amount} onChange={handleAmountChange} placeholder={amount} />
      <select className='select-base' value={base} onChange={handleBaseChange}>
        {data && Object.keys(data.rates).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      {data && (
        <h3>RM {amount * data.rates[base]}</h3>
      )}
    </>
  );
}
