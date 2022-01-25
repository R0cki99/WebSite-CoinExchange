import React from 'react';
import CoinList from './Components/CoinList/CoinList';
import AccountBalance from './Components/AccountBalance/AccountBalance'
import Header from './Components/Header/Header';
import styled from 'styled-components';

//import { v4 as uuidv4 } from 'uuid';

const DIVV = styled.div`
  text-align: center;
  background-color: rgb(97, 97, 133);
  color: #cccccc;
`;


class App extends React.Component {
      state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        {
          name: 'Bitcoin', 
          ticker: 'BTC',
          balance: 0.5,
          price: 9999.99
        },
        {
          name: 'Ethereum', 
          ticker: 'ETH',
          balance: 2,
          price: 2000.99         
        },
        {
          name: 'Polkadot', 
          ticker: 'DOT',
          balance: 33,
          price: 15.99         
        }
      ]
    }

  classProperty = 'value'

//de fiecare data cand facem render la o lista trebuie sa adaugam "un key"

  handleRefresh = (valueChangeTicker) => {
      const newCoinData = this.state.coinData.map( function( {ticker, name, balance, price} ){
        let newPrice = price;
          if( valueChangeTicker === ticker ) {
            const randomPercentage = 0.995 + Math.random() * 0.01;
            newPrice = newPrice * randomPercentage;
            }
            return {
              ticker: ticker,
              name: name,
              balance: balance,
              price: newPrice
            }
      });

      this.setState({ coinData: newCoinData }); //nepunand si balance-ul, acesta va ramane intact. Doar coin data se schimba
  }
  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
        return {
          ...oldState,
          showBalance: !oldState.showBalance
        }
    })
  }
  render(){
    return (
        <DIVV>
          <Header />
          <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleBalanceVisibilityChange={this.handleBalanceVisibilityChange} />
          <CoinList
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh} 
          />
        </DIVV>
      );
  }
  
}
//cand in app.js se schimba o varabila, si celelalte componente/copii isi dau iar re-render()
export default App;
