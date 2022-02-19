import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;


export default function CoinList(props){
    return (
        <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                {props.showBalance ? <th>Balance</th> : null}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                //this.state.coinData.map( x => <Coin key= {x.ticker} name =  {x.name} ticker = {x.ticker} price = {x.price} 
                ///>)     //metoda de mai jos se numeste: Destructuring
                  props.coinData.map( ({key, name, ticker, price, balance, showBalance}) => 
                  <Coin key= {key} 
                        handleRefresh={props.handleRefresh}
                        name =  {name} 
                        ticker = {ticker}
                        showBalance ={props.showBalance}
                        balance = {balance}
                        price = {price} 
                        tickerid = {key}
                 />)    
                // this.state.coinData.map( value => <Coin key= {value.ticker} {...value} />)    
                //PROPS DRILLING -> APP.js -> CoinList -> Coin.  this.state...->this.props...->this.props...
              }
    
              
            </tbody>
          </Table>
    )
}
