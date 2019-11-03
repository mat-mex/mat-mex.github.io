import styled from 'styled-components';

export default styled('button')`
    width: 32px;
    height: 32px;
    border: none;
    background: url(${(p) => p.icon});
    background-size: cover;
    padding: 16px;
    ${(p) => p.right && 'transform: rotate(180deg)'};
`;
