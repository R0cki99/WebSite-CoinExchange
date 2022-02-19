import React, {useEffect, useState} from 'react';
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
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App(props){
 
    const [balance, setBalance] = useState(10000);
    const [showBalance, setShowBalance] = useState(true);
    const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
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
            price: formatPrice(coin.quotes.USD.price),
          };
      })
      //retreive the prices
      //this.setState({coinData: coinPriceData});
      setCoinData(coinPriceData);
    }
    useEffect(function(){
      if(coinData.length === 0 ){
        //we are in component did mount
        componentDidMount();
      }else{
        //we are in component did update
      }
    });


/*
    componentDidUpdate = () => {
      console.log('UPDATE');  //cand facem render, se face DidUpdate. Cand facem refresh la pagina, se face mount-ul
    }*/
  //classProperty = 'value'

//de fiecare data cand facem render la o lista trebuie sa adaugam "un key"

 const handleRefresh = async (valueChangeId) => {
      const tickerURL = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
      const response = await axios.get(tickerURL);
      const newPrice = formatPrice(response.data.quotes.USD.price);
      const newCoinData = coinData.map( function( values ){
        let newValues = {...values};
          if( valueChangeId === values.key ) {
            newValues.price = newPrice;
            }
            return newValues;
      });

      //this.setState({ coinData: newCoinData }); //nepunand si balance-ul, acesta va ramane intact. Doar coin data se schimba
      setCoinData(newCoinData);
    }
 const handleBalanceVisibilityChange = () => {
    setShowBalance(oldValue => !oldValue);
  }

    return (
      
        <BODY>
          <Header />
          <AccountBalance amount={balance} showBalance={showBalance} handleBalanceVisibilityChange={handleBalanceVisibilityChange} />
          <CoinList
          coinData={coinData} 
          showBalance={showBalance}
          handleRefresh={handleRefresh} 
          />

          <APITable />
          
          

          
        </BODY>
        
      );
   
}
//cand in app.js se schimba o varabila, si celelalte componente/copii isi dau iar re-render()
export default App;
