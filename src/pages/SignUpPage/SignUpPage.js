import React from "react";
import { ContainerSignUp } from "./StyleSignUp";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import login from '../../assets/login.png'

export default function SignUpPage({setTextButton}) {
  useUnprotectedPage()

  
  return (
    <ContainerSignUp>
      <img src={login} alt='icone de login' />
      <SignUpForm setTextButton={setTextButton} />
    </ContainerSignUp>
  );
}
