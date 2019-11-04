import styled from 'styled-components';

export default styled('a')`
    font-family: "Segoe UI", Helvetica, serif;
    letter-spacing: 0;
    display: block;
    margin-bottom: 5px;
    text-decoration: none;
    color: inherit;
    ${(p) => p.bold && 'font-weight: bold'};
    :hover {
        color: #555;
    }
`;
