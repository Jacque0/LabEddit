import React, { useState } from "react";
import { ButtonForm, Form, Input } from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/users";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function LoginForm({ setTextButton }) {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
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
    postLogin(form, navigate, setTextButton, setError, setOpen);
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
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
        <ButtonForm>LOGIN</ButtonForm>
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
