import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import Title from '../components/Title';

export default function Header() {
  return (
    <MyHeader>
      <div className="limitWidth flex">
        <Icon color="#08e" size="40px" path="/icons/matmex.svg" />
        <Title>МатМех</Title>
      </div>
    </MyHeader>
  );
}

const MyHeader = styled('div')`
    box-sizing: border-box;
    padding: 4px;
    
    position: sticky;
    height: 48px;
    width: 100%;
    top: 0;
    
    box-shadow: black 0 0 5px;
    background-color: white;
    overflow: hidden;
`;
