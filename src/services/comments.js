import axios from "axios";
import { baseURL } from "../constants/urls";

export const createCommentVote = (body, id, setOpen) => {
    const url = `${baseURL}comments/${id}/votes`
    const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
    axios.post(url, body, {headers})
    .then((resp)=>{})
    .catch((err)=>{setOpen(true)})
  }
  
  export const changeCommentVote = (body, id, setOpen) => {
    const url = `${baseURL}comments/${id}/votes`
    const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
    axios.put(url, body, {headers})
    .then((resp)=>{})
    .catch((err)=>{setOpen(true)})
  }
  
  export const deleteCommentVote = (id, setOpen) => {
    const url = `${baseURL}comments/${id}/votes`
    const headers = {
        Authorization: localStorage.getItem("token"),
      };
    axios.delete(url, {headers})
    .then((resp)=>{})
    .catch((err)=>{setOpen(true)})
  }