import React from 'react';
import styled from 'styled-components';
import Title from "./ListTitle";
import Container from "./ListContainer";
import ListButton from "./ListButton";

let id = 0;

export default function List({ children, title }) {
  id++;
  const listId = 'list-items-' + id;
  const scroll = (direction) => sideScroll(listId, direction, 10, 295, 25);
  return (
      <div>
        <Title>{title}</Title>
        <Container>
          <ListButton icon="/icons/arrow.svg" onClick={() => scroll('left')}/>
          <Items id={listId}>
            {children}
          </Items>
          <ListButton icon="/icons/arrow.svg" right onClick={() => scroll('right')} />
        </Container>
      </div>
  );
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

function sideScroll(id, direction, speed, distance, step) {
  console.log(id);
  const element = document.getElementById(id);
  let scrollAmount = 0;

  let slideTimer = setInterval(() => {
    if (direction === 'left')
      element.scrollLeft -= step;
    else
      element.scrollLeft += step;

    scrollAmount += step;

    if (scrollAmount >= distance)
      window.clearInterval(slideTimer);
  }, speed);
}

