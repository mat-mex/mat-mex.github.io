import React from 'react';
import styled from 'styled-components';

export default function List({ children }) {
  return (
      <MyList>
        {children}
      </MyList>
  );
}

const MyList = styled('div')`
    display: flex;
    flex-direction: row;
    flex: auto;
    overflow-x: scroll;
    overflow-y: hidden;
`;
