import React from 'react';
import './App.css';
import logo from './logo.svg';
import Coin from './Components/Coin/Coin';
import AccountBalance from './Components/AccountBalance/AccountBalance'
//import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin', 
          ticker: 'BTC',
          price: 9999.99
        },
        {
          name: 'Ethereum', 
          ticker: 'ETH',
          price: 2000.99         
        },
        {
          name: 'Polkadot', 
          ticker: 'DOT',
          price: 15.99         
        }
      ]
    }
  }
//de fiecare data cand facem render la o lista trebuie sa adaugam "un key"
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="React logo" className="App-logo"></img>
            <h1 className="App-title">Coin Exchange </h1>
            
          </header>
          <AccountBalance amount={this.state.balance} />
          <table className="Coin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                //this.state.coinData.map( x => <Coin key= {x.ticker} name =  {x.name} ticker = {x.ticker} price = {x.price} 
                ///>)     //metoda de mai jos se numeste: Destructuring
                  this.state.coinData.map( ({name, ticker, price}) => <Coin key= {ticker} name =  {name} ticker = {ticker} price = {price} 
                 />)    
                // this.state.coinData.map( value => <Coin key= {value.ticker} {...value} />)    
              }
    
              
            </tbody>
          </table>
        </div>
      );
  }
  
}

export default App;
