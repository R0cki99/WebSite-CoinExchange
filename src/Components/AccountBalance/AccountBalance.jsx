
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 2rem;
  text-align: left;
  border: 2px solid palevioletred;
  padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
  render() {
    return (
        <Section>
            ${this.props.amount}
        </Section>
    );
  }
}


AccountBalance.propTypes = {  //definim daca o variabila e nr sau string
    amount: PropTypes.number.isRequired 
}
