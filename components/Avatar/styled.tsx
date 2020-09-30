import styled from "styled-components";
import theme from "../../theme"

export const AvatarHolder = styled.div`
    width: ${({size})=>size || "40px"};
    height: ${({size})=>size || "40px"};
    background: ${theme.color.one} url(${({src}) => src || null}) center/cover no-repeat;
    border-radius: 50px;
    cursor: pointer;
`;