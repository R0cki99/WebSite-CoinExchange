import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';


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
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.state.price}</td>
                <td>
                  <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                  </form>
                </td>
            </tr>
              );
  }
}

Coin.propTypes = {  //definim daca o variabila e nr sau string
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
