import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const HeaderStyle = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 36px;
  color: white;    
`;

const Img = styled.img`
  height: 6rem;
  pointer-events: none;
`;

const TitleH = styled.h1`
  font-size: 4rem; 
`;

export default class Header extends Component {
  render() {
    return (
        <HeaderStyle>
            <Img src={logo} alt="React logo"></Img>
            <TitleH>Coin Exchange </TitleH>
        </HeaderStyle>

    )
  }
}
