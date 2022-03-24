import React, { useState } from "react";
import { ButtonForm, Form, Input } from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/users";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignUpForm({ setTextButton }) {
  const { form, onChange, cleanFields } = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(undefined);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    cleanFields();
    setOpen(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    postSignUp(form, navigate, setTextButton, setError, setOpen);
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          name="username"
          value={form.username}
          onChange={onChange}
          required
          placeholder="Usuário"
        />
        <Input
          type={"email"}
          name="email"
          value={form.email}
          onChange={onChange}
          required
          placeholder="Email"
        />
        <Input
          type={"password"}
          name="password"
          value={form.password}
          onChange={onChange}
          required
          placeholder="Senha"
        />
        <ButtonForm>CRIAR</ButtonForm>
      </Form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error && (typeof error === "string"
            ? error
            : `${error.message}\nÉ possível que a senha seja muito pequena`)}
        </Alert>
      </Snackbar>
    </div>
  );
}
