import React from 'react';
import styled from 'styled-components';
import Icon from "./Icon";
import Color from 'color';

export default function ListItem({ color, title, icon, text }) {
    return (
      <Item color={color}>
        <ItemIcon path={icon} color={color}/>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{text}</ItemDescription>
      </Item>
    );
};

const ItemDescription = styled('p')`
    position: absolute;
    bottom: 0;
    
    margin: 0;
    padding: 25px;
    
    color: white;
`;

const ItemIcon = styled(Icon)`
    position: absolute;
    top: -5px;
    right: -5px;
    height: 60px;
    width: 60px;
        
    box-shadow: -5px 5px 10px rgba(0,0,0,.1);
    transition: box-shadow .3s, top .3s, right .3s;
`;

const ItemTitle = styled('h2')`
    font: bold 1.7rem "Panton";
    line-height: 1;
    color: white;
    
    padding: 20px 25px;
    margin: 0;
`;

const Item = styled('div')`
    position: relative;
    flex-shrink: 0;
    margin: 20px 10px;
    
    height: 180px;
    width: 300px;
    
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
