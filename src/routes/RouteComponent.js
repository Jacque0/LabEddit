import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export default function RouteComponent({setTextButton, infoPost, setInfoPost}) {
  return (
    <Routes>
      <Route path="/" element={<FeedPage setInfoPost={setInfoPost} />} />
      <Route path="/login" element={<LoginPage setTextButton={setTextButton} />} />
      <Route path="/signup" element={<SignUpPage setTextButton={setTextButton} />} />
      <Route path="/post/:id" element={<PostPage infoPost={infoPost} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
