import styled from 'styled-components';

export default styled('button')`
    width: 24px;
    height: 24px;
    border: none;
    background: url(${(p) => p.icon});
    background-size: cover;
    box-sizing: border-box;
    margin: 8px;
    opacity: .5;
    transition: opacity .3s;
    ${(p) => p.right && 'transform: rotate(180deg)'};
    
    
    :hover {
        opacity: 1;
    }
`;
