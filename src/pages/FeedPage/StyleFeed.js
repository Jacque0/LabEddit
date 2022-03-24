import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerFeed = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const ContainerPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  .arrow-back{
    position: fixed;
    bottom: 10vh;
    left: 1vw;
    z-index: 2;
  }
  .arrow-forward{
    position: fixed;
    bottom: 10vh;
    right: 1vw;
    z-index: 2;
  }
`;
export const ContainerCreatePost = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${mainColors.principal};
  width: 400px;
  max-width: 80vw;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 3px 4px 10px 5px ${mainColors.principal};
`;

export const InputText = styled.textarea`
  background-color: white;
  color: ${mainColors.principal};
  width: 90%;
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
