import styled from "styled-components";

export default styled('span')`
    position: absolute;
    right: calc(var(--card-icon-size) / -8);
    top: calc(var(--card-icon-size) / -8);
    background-color: ${(p) => p.color};
    color: white;
    padding: 5px;
    font-size: .7rem;
    font-weight: bold;
    
    border-radius: 0 var(--card-border-radius) 0 var(--card-border-radius);   
    transition: box-shadow .3s, right .3s, top .3s; 
    box-shadow: -5px 5px 10px rgba(0,0,0,.1);
`;
