import React from 'react';
import styled from 'styled-components';
import Icon from "./CardIcon";
import Title from "./CardTitle";
import Text from "./CardText";

export default function Card({ color, title, icon, text }) {
    return (
      <MyCard color={color}>
        <Icon path={icon} color={color}/>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </MyCard>
    );
};

const MyCard = styled('div')`
    position: relative;
    flex-shrink: 0;
    margin: 20px 10px;
    
    height: ${60 * 3}px;
    width: ${60 * 5}px;
    
    background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), ${(p) => p.color};
    box-shadow: 0 5px 10px rgba(0,0,0,.1);
    transition: box-shadow .3s, transform .3s;
    border-radius: 15px;
    
    cursor: pointer;
    
    :hover {
        box-shadow: 0 5px 10px rgba(0,0,0,.25);
        transform: scale(1.05);

        div {
            box-shadow: none;
            top: 0;
            right: 0;
        }
    }
`;
