import { Button } from "@material-ui/core";
import React from "react";
import { ContainerHeader, Title } from "./styles/StyleHeader";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../routes/coordinator";

export default function Header({textButton, setTextButton}) {
  const token = localStorage.getItem("token")
  const navigate = useNavigate();
  

  const logout = () =>{
    localStorage.removeItem("token")
  }

  const onClickLogin = () => {
    if (token){
      logout()
      setTextButton("login")
      goToLogin(navigate)
    } else{
      goToLogin(navigate)
    }
  }

  return (
    <ContainerHeader>
      <Title>LabEddit</Title>
      <div>
        <Button
          onClick={() => {
            goToFeed(navigate);
          }}
          className="margin-right"
          size="small"
          color="primary"
          variant="contained"
        >
          Feed
        </Button>
        <Button
          onClick={onClickLogin}
          size="small"
          color="primary"
          variant="contained"
        >
          {textButton}
        </Button>
      </div>
    </ContainerHeader>
  );
}
