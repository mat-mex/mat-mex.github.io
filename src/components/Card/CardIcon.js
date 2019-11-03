import styled from "styled-components";
import Icon from "../Icon";

export default styled(Icon)`
    position: absolute;
    top: -5px;
    right: -5px;
    height: 60px;
    width: 60px;
        
    box-shadow: -5px 5px 10px rgba(0,0,0,.1);
    transition: box-shadow .3s, top .3s, right .3s;
`;
