import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.4rem;
`;


export default class CoinList extends Component {
  render() {
    return (
        <Table>
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
                  this.props.coinData.map( ({name, ticker, price}) => <Coin key= {ticker} name =  {name} ticker = {ticker} price = {price} 
                 />)    
                // this.state.coinData.map( value => <Coin key= {value.ticker} {...value} />)    
                //PROPS DRILLING -> APP.js -> CoinList -> Coin.  this.state...->this.props...->this.props...
              }
    
              
            </tbody>
          </Table>
    )
  }
}
