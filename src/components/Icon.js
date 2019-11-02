import styled from 'styled-components';

export default styled('div')`
    width: ${(p) => p.size};
    height: ${(p) => p.size};
    border-radius: 0 25% 0 25%;
    background: ${(p) => p.color} url(${(p) => p.path});
`;
