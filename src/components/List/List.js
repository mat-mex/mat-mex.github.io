import React, { useState } from 'react';
import styled from 'styled-components';
import Title from "./ListTitle";
import Container from "./ListContainer";
import ListButton from "./ListButton";

let id = 0;

export default function List({ children, title }) {
  const [listId] = useState('list-items-' + id++);
  const [side, setSide] = useState('left');
  const scroll = (direction) => sideScroll(listId, direction, 10, 295, 25);


  return (
      <div>
        <Title>{title}</Title>
        <Container>
          <ListButton icon="/icons/arrow.svg" onClick={() => scroll('left')} display={side !== 'left'} />
          <Items id={listId}>
            {children}
          </Items>
          <ListButton icon="/icons/arrow.svg" right onClick={() => scroll('right')} display={side !== 'right'} />
        </Container>
      </div>
  );

  function sideScroll(id, direction, speed, distance, step) {
    const element = document.getElementById(id);
    let scrollAmount = 0;

    let slideTimer = setInterval(() => {
      if (direction === 'left')
        element.scrollLeft -= step;
      else
        element.scrollLeft += step;

      scrollAmount += step;

      if (element.scrollLeft >= element.scrollWidth - element.offsetWidth)
        setSide('right');
      else if (element.scrollLeft === 0)
        setSide('left');
      else setSide('middle');

      if (scrollAmount >= distance)
        window.clearInterval(slideTimer);
    }, speed);


  }
}

const Items = styled('div')`
    display: flex;
    flex-direction: row;
    flex: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    
    ::-webkit-scrollbar {
        width: 0;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
