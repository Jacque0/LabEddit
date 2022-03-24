import React, { useState } from "react";
import { ButtonForm, Form } from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import { createComment } from "../../services/posts";
import { InputText } from "./StylePost";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function PostForm({ recharge, setRecharge, id }) {
  const { form, onChange, cleanFields } = useForm({ body: "" });
  const [message, setMessage] = useState(undefined);
  const [typeAlert, setTypeAlert] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setRecharge(recharge + 1);
    setOpen(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createComment(form, id, setMessage, setTypeAlert, setOpen);
    cleanFields();
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <InputText
          name="body"
          value={form.body}
          onChange={onChange}
          required
          placeholder="Escreva seu comentário"
        />
        <ButtonForm>COMENTAR</ButtonForm>
      </Form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={typeAlert}>
          {message &&
            (typeof message === "string" ? message : "Ocorreu algum erro")}
        </Alert>
      </Snackbar>
    </div>
  );
}
