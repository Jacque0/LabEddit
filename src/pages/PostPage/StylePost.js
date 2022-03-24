import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerPost= styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    h1{
      margin-bottom: 20px;
      word-wrap: break-word;
      text-align: center;
      width: 80%;
    }
    h3{
      margin-bottom: 20px;
      width: 80%;
      text-align: center;
      word-wrap: break-word;
    }
    h2{
      text-align: center;
      word-wrap: break-word;
      width: 80%;
    }
`

export const ContainerComments = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`

export const InputText = styled.textarea`
  background-color: white;
  color: ${mainColors.principal};
  width: 300px;
  border-radius: 10px;
  border: none;
  height: 100px;
  font-size: 1.2em;
  border: 1px solid ${mainColors.principal};
  padding: 5px;
  :focus {
    outline: 3px solid ${mainColors.principal};
  }
  ::placeholder {
    color: ${mainColors.secundario};
  }
`;