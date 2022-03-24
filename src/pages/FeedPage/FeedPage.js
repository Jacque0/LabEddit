import React, { useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {
  ContainerCreatePost,
  ContainerFeed,
  ContainerPosts,
} from "./StyleFeed";
import { baseURL } from "../../constants/urls";
import CardPost from "../../components/CardPost";
import FeedForm from "./FeedForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function FeedPage({setInfoPost}) {
  useProtectedPage();
  const [page, setPage] = useState(Number(localStorage.getItem("page")) || 1);
  const [recharge, setRecharge] = useState(0);
  const [data, isLoading, error] = useRequestData(
    [],
    `${baseURL}posts?page=${page}&size=12`,
    recharge
  );
  const postList = data.map((item) => {
    return <CardPost setInfoPost={setInfoPost} key={item.id} post={item} />;
  });

  const onClickBack = () => {
    setPage(page - 1);
    localStorage.setItem("page", (page-1).toString())
  };

  const onClickForward = () => {
    setPage(page + 1);
    localStorage.setItem("page", (page+1).toString())
  };

  return (
    <ContainerFeed>
      <ContainerCreatePost>
        <h2>Criar Post</h2>
        <FeedForm setPage={setPage} recharge={recharge} setRecharge={setRecharge} />
      </ContainerCreatePost>
      <ContainerPosts>
        {page === 1 ? (
          <IconButton
            onClick={onClickBack}
            color="primary"
            className="arrow-back"
            disabled
          >
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton
            onClick={onClickBack}
            color="primary"
            className="arrow-back"
          >
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        )}
        {isLoading && <CircularProgress color="primary" />}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && postList && postList}
        <IconButton
          onClick={onClickForward}
          color="primary"
          className="arrow-forward"
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </ContainerPosts>
    </ContainerFeed>
  );
}
