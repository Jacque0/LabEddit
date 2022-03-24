import axios from "axios";
import { baseURL } from "../constants/urls";
import { goToFeedReplace } from "../routes/coordinator";

export const postLogin = (body, navigate, setTextButton, setError, setOpen) => {
    const url = `${baseURL}users/login`
    axios.post(url, body)
    .then((resp)=>{
      localStorage.setItem("token", resp.data.token);
      goToFeedReplace(navigate)
      setTextButton("logout");})
    .catch((err)=>{
      setError(err.response.data)
      setOpen(true)})
}

export const postSignUp = (body, navigate, setTextButton, setError, setOpen) => {
    const url = `${baseURL}users/signup`
    axios.post(url, body)
    .then((resp)=>{
      localStorage.setItem("token", resp.data.token);
      goToFeedReplace(navigate)
      setTextButton("logout");})
    .catch((err)=>{
      setError(err.response.data)
      setOpen(true)})
}