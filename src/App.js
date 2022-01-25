import React from 'react';
import './App.css';
import CoinList from './Components/CoinList/CoinList';
import AccountBalance from './Components/AccountBalance/AccountBalance'
import Header from './Components/Header/Header';
import styled from 'styled-components';

//import { v4 as uuidv4 } from 'uuid';

const DIVV = styled.divv`
  text-align: center;
  background-color: rgb(97, 97, 133);
  color: #cccccc;
`;


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
        <DIVV>
          <Header />
          <AccountBalance amount={this.state.balance} />
          <CoinList coinData={this.state.coinData} />
        </DIVV>
      );
  }
  
}
//cand in app.js se schimba o varabila, si celelalte componente/copii isi dau iar re-render()
export default App;
