import styled, { createGlobalStyle } from "styled-components";
import { mainColors } from "../../constants/colors";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${mainColors.fundo};
  color: ${mainColors.principal};
`
export const Input = styled.input`
  background-color: white;
  color: ${mainColors.principal};
  width:200px;
  transition: ease-in-out, width .35s ease-in-out;
  margin: 10px;
  border-radius: 10px;
  border: none;
  height: 45px;
  font-size: 1.2em;
  border: 1px solid ${mainColors.principal};
  padding: 5px;
  :focus{
    outline: 3px solid ${mainColors.principal};
    width: 300px;
  }
  ::placeholder {
  color: ${mainColors.secundario};
}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const ButtonForm = styled.button`
  background-image: linear-gradient(to bottom left, ${mainColors.azul}, ${mainColors.rosa});
  align-self: center;
  margin: 10px;
  color: ${mainColors.fundo};
  width: 200px;
  height: 45px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :hover{
    opacity: .5;
  }
`