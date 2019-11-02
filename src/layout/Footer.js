import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <MyFooter />
  );
}

const MyFooter = styled('div')`
    width: 100%;
    padding: 100px 0;
    top: 0;
    
    overflow: hidden;
    box-shadow: inset 0 5px 5px -5px black;
    background-color: #ddd;
`;
