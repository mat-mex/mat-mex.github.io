import React from 'react';
import styled from 'styled-components';
import Icon from "./CardIcon";
import Title from "./CardTitle";
import Text from "./CardText";

export default function Card({ color, title, icon, text, href }) {
    if (!href) color = '#ccc';
    return (
      <MyLink href={href}>
        <MyCard color={color}>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <Icon path={icon} color={color}/>
        </MyCard>
      </MyLink>
    );
};

const MyLink = styled('a')`
    text-decoration: none;
`;

const MyCard = styled('div')`
    position: relative;
    flex-shrink: 0;
    margin: var(--card-padding) calc(var(--card-padding) / 2);
    box-sizing: border-box;
    padding: var(--card-padding);
    
    height: calc(var(--card-width) / 5 * 3);
    width: var(--card-width);
    
    background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), ${(p) => p.color};
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    transition: box-shadow .3s, transform .3s;
    border-radius: var(--card-border-radius);
    
    cursor: pointer;
    
    :hover {
        box-shadow: 0 5px 5px rgba(0,0,0,.25);
        transform: scale(1.05);

        div {
            box-shadow: none;
            width: var(--card-padding);
            height: var(--card-padding);
            left: 0;
            bottom: 0;
        }
    }
`;
