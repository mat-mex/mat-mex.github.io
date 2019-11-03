import styled from 'styled-components';

export default styled('button')`
    width: 32px;
    height: 32px;
    border: none;
    background: url(${(p) => p.icon});
    background-size: cover;
    padding: 16px;
    opacity: .5;
    transition: opacity .3s;
    ${(p) => p.right && 'transform: rotate(180deg)'};
    
    
    :hover {
        opacity: 1;
    }
`;
