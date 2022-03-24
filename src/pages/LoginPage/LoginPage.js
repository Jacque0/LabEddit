import React from "react";
import { ContainerLogin } from "./StyleLogin";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import login from '../../assets/login.png'
import LoginForm from "./LoginForm";
import { goToSignUp } from "../../routes/coordinator";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export default function LoginPage({setTextButton}) {
  useUnprotectedPage();
  const navigate = useNavigate();

  return (
    <ContainerLogin>
      <div>
        <img src={login} alt='icone de login' />
        <LoginForm setTextButton={setTextButton} />
      </div>
      <Button onClick={()=>{goToSignUp(navigate)}} variant="contained" color="primary">
        Cadastre-se
      </Button>
    </ContainerLogin>
  );
}
