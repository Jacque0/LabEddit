import axios from "axios";
import { baseURL } from "../constants/urls";

export const createPost = (body, setMessage, setTypeAlert, setOpen) => {
  const url = `${baseURL}posts`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  axios
    .post(url, body, { headers })
    .then((resp) => {
      setTypeAlert("success");
      setMessage(resp.data);
      setOpen(true);
    })
    .catch((err) => {
      setTypeAlert("error");
      setMessage(err.response.data);
      setOpen(true);
    });
};

export const createComment = (body, id, setMessage, setTypeAlert, setOpen) => {
  const url = `${baseURL}posts/${id}/comments`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  axios
    .post(url, body, { headers })
    .then((resp) => {
      setTypeAlert("success");
      setMessage(resp.data);
      setOpen(true);
    })
    .catch((err) => {
      setTypeAlert("error");
      setMessage(err.response.data);
      setOpen(true);
    });
};

export const createPostVote = (body, id, setOnError) => {
  const url = `${baseURL}posts/${id}/votes`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  axios
    .post(url, body, { headers })
    .then((resp) => {})
    .catch((err) => {
      setOnError(true);
    });
};

export const changePostVote = (body, id, setOnError) => {
  const url = `${baseURL}posts/${id}/votes`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  axios
    .put(url, body, { headers })
    .then((resp) => {})
    .catch((err) => {
      setOnError(true);
    });
};

export const deletePostVote = (id, setOnError) => {
  const url = `${baseURL}posts/${id}/votes`;
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  axios
    .delete(url, { headers })
    .then((resp) => {})
    .catch((err) => {
      setOnError(true);
    });
};
