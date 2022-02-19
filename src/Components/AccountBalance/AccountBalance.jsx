
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Section = styled.section`
  font-size: 2rem;
  text-align: left;
  border: 2px solid palevioletred;
  padding: 1.5rem 0 1.5rem 5rem;
`;


export default function AccountBalance(props) {
/*
  constructor(props){
    super(props);
       this.handleBalance=this.handleBalance.bind(this);

  }
*/
 /*
  handleBalance(event) {
      event.preventDefault();

      //this.props.handleBalanceApp(this.props.showBalance);
    
      if(this.props.showBalance===true){
        this.setState( { showBalance: false} );
      }else{
        this.setState( { showBalance: false} );
      }
      console.log(this.props.showBalance);
   /*   
      var x = document.getElementById("d");
      if(this.props.showBalance === true){
           x.style.display = "none";
           this.props.showBalance = false;
      }else{
        x.style.display = "block";
        this.props.showBalance = true;
      }

      
  }*/
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if( props.showBalance ){
        content = <>Balance: ${props.amount}</>;
    }
    return (
        <Section>
           {content}
           <button onClick={props.handleBalanceVisibilityChange}>{buttonText}</button>
        </Section>
    );
}


AccountBalance.propTypes = {  //definim daca o variabila e nr sau string
    amount: PropTypes.number.isRequired 
}
