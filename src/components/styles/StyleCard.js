import styled from "styled-components";
import {mainColors} from '../../constants/colors'

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background-color: ${mainColors.principal};
    color: ${mainColors.fundo};
    margin: 20px;
    word-wrap: break-word;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    .comment{
        padding: 15px;
    }
`
export const TitleCard = styled.div`
    width: 100%;
    background-color: ${mainColors.fundo};
    border: 1px solid ${mainColors.principal};
    color: ${mainColors.principal};
    border-radius: 0.5em 0.5em 0 0;
    padding: 0.5em 0.4em;
    text-align: center;
`
export const BodyCard = styled.div`
    padding: 15px;
    line-height: 1.3;
    cursor: pointer;
    :hover{
        opacity: .5;
    }
    h4{
        text-align: center;
        margin-bottom: 10px;
    }
`
export const ButtonsArea = styled.div`
    width: 100%;
    background-color: ${mainColors.fundo};
    border: 1px solid ${mainColors.principal};
    color: ${mainColors.principal};
    border-radius: 0 0 0.5em 0.5em;
    padding: 0.5em 0.4em;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
`