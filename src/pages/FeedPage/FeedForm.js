import React, { useState } from "react";
import { ButtonForm, Form, Input } from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { InputText } from "./StyleFeed";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FeedForm({ setPage, recharge, setRecharge }) {
  const { form, onChange, cleanFields } = useForm({ title: "", body: "" });
  const [message, setMessage] = useState(undefined);
  const [typeAlert, setTypeAlert] = useState('')
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setRecharge(recharge + 1);
    setPage(1)
    localStorage.setItem("page", '1')
    setOpen(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createPost(form, setMessage, setTypeAlert, setOpen);
    cleanFields();
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          name="title"
          value={form.title}
          onChange={onChange}
          required
          placeholder="Título"
        />
        <InputText
          name="body"
          value={form.body}
          onChange={onChange}
          required
          placeholder="Escreva seu texto"
        />
        <ButtonForm>POSTAR</ButtonForm>
      </Form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={typeAlert}>
          {message && (typeof message === "string"
            ? message: "Ocorreu algum erro")}
        </Alert>
      </Snackbar>
    </div>
  );
}
