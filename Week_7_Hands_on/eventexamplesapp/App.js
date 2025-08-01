import React from 'react';
import Counter from './components/Counter';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Event Examples App</h1>
      <Counter />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

