import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td`
  border: 1px solid #cccccc;
  width: 25vh;
`;


export default class Coin extends Component {

  constructor(props){
    super(props);
    this.state = {
      price: this.props.price
    }
    this.handleClick = this.handleClick.bind(this); //aceasta linie este pentru a face legatura  dintre handleClick si state-ul care trebuie
  }

/*
  componentDidMount(){
    const callback = () => {
      //here we set the state to a new random value
      const randomPercentage = 0.995 + Math.random() * 0.01;
      //DONT DO THIS: we are not allowed to change the value of the state
      //this.state.price = this.state.price * randomPercentage;
      //ai voi sa folosesti this.state.x in partea din stanga 
      // a egalului doar in contructor

      this.setState(function(oldState){
        return{
          price: oldState.price * randomPercentage
        }
      });

    }
    setInterval( callback, 1000);
  }*/

  handleClick(event){
    //prevent the default action of submitting the form

      event.preventDefault();
      
      const randomPercentage = 0.995 + Math.random() * 0.01;
      this.setState(function(oldState){
        return{
          price: oldState.price * randomPercentage
        }
      });    

  }
  render() {
        return ( //in react nu ai nevoie de ${}. poti doar {}
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.state.price}</Td>
                <Td>
                  <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                  </form>
                </Td>
            </tr>
              );
  }
}

Coin.propTypes = {  //definim daca o variabila e nr sau string
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
