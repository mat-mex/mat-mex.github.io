import styled from "styled-components";
import Icon from "../Icon";

export default styled(Icon)`
    position: absolute;
    bottom: calc(var(--card-icon-size) / -8);
    left: calc(var(--card-icon-size) / -8);
    height: var(--card-icon-size);
    width: var(--card-icon-size);
        
    box-shadow: 5px -5px 10px rgba(0,0,0,.1);
    transition: box-shadow .3s, bottom .3s, left .3s, width .3s, height .3s;
`;
