import React from 'react';
import './App.css';
import logo from './logo.svg';
import Coin from './Components/Coin/Coin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo"></img>
        <h1 className="App-title">Coin Exchange </h1>
        
      </header>
      <table className="Coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={42000} />
          <Coin name="Ethereum" ticker="ETH" price={3100} />
          <Coin name="Polkadot" ticker="DOT" price={25} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
