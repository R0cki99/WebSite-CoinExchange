import React from 'react';
import CoinList from './Components/CoinList/CoinList';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import APITable from './Components/APITable/APITable';
import Header from './Components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';

//import { v4 as uuidv4 } from 'uuid';

const COIN_COUNT = 10;

const BODY = styled.body`
  text-align: center;
  background-color: rgb(97, 97, 133);
  color: #cccccc;
`


class App extends React.Component {
      state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        /*
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
        }*/
      ]
    }

    componentDidMount = async () => {
      const response = await axios.get('https://api.coinpaprika.com/v1/coins')   
      const coinIDs = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
      const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
      const promises = coinIDs.map( id => axios.get(tickerURL + id));
      const coinData = await Promise.all(promises);
      const coinPriceData = coinData.map(function(response) {
          const coin = response.data;
          return {
            key: coin.id,
            name: coin.name,
            ticker: coin.symbol,
            balance: 0,
            price: parseFloat(Number(coin.quotes.USD.price).toFixed(4)),
          };
      })
      //retreive the prices
      this.setState({coinData: coinPriceData});
    }
/*
    componentDidUpdate = () => {
      console.log('UPDATE');  //cand facem render, se face DidUpdate. Cand facem refresh la pagina, se face mount-ul
    }*/
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
      
        <BODY>
          <Header />
          <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleBalanceVisibilityChange={this.handleBalanceVisibilityChange} />
          <CoinList
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh} 
          />

          <APITable />
          
          

          
        </BODY>
        
      );
  }
  
}
//cand in app.js se schimba o varabila, si celelalte componente/copii isi dau iar re-render()
export default App;
