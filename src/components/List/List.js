import React, { useState } from 'react';
import styled from 'styled-components';
import Title from "./ListTitle";
import Container from "./ListContainer";
import ListButton from "./ListButton";

let id = 0;

export default function List({ children, title }) {
  const [listId] = useState('list-items-' + id++);
  const scroll = (direction) => sideScroll(direction, 10, 260, 25);

  const sideScroll = (direction, speed, distance, step) => {
      const element = document.getElementById(listId);
      let scrollAmount = 0;

      let slideTimer = setInterval(() => {
          element.scrollLeft += (direction === 'left') ? -step : step;
          scrollAmount += step;

          if (scrollAmount >= distance) window.clearInterval(slideTimer);
      }, speed);
  };

  return (
      <div>
        <div class="flex flex-center">
          <ListButton icon="/icons/arrow.svg" onClick={() => scroll('left')} />
          <Title>{title}</Title>
          <ListButton icon="/icons/arrow.svg" right onClick={() => scroll('right')} />
        </div>
        <Container>
          <Items id={listId}>
            {children}
          </Items>
        </Container>
      </div>
  );
}

const Items = styled('div')`
    display: flex;
    flex-direction: row;
    margin: 0 10px;
    flex: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    
    ::-webkit-scrollbar {
        width: 0;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
