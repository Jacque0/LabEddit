import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerHeader = styled.div`
    width: 100%;
    background-image: linear-gradient(to bottom left, ${mainColors.azul}, ${mainColors.rosa});
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    .margin-right{
        margin-right: 10px;
    }
    position: sticky;
    top: 0;
    z-index: 2;
`
export const Title = styled.h1`
    color: ${mainColors.fundo};
`