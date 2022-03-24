import React, { useState, useEffect } from "react";
import {
  BodyCard,
  ButtonsArea,
  ContainerCard,
  TitleCard,
} from "./styles/StyleCard";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { goToPost } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import {
  changePostVote,
  createPostVote,
  deletePostVote,
} from "../services/posts";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CardPost({ post, setInfoPost }) {
  const navigate = useNavigate();
  const [userVote, setUserVote] = useState(post.userVote);
  const [voteSum, setVoteSum] = useState(Number(post.voteSum));
  const [colorButtonUp, setColorButtonUp] = useState("default");
  const [colorButtonDown, setColorButtonDown] = useState("default");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (userVote === 1) {
      setColorButtonUp("primary");
    } else if (userVote === -1) {
      setColorButtonDown("primary");
    }
  }, [userVote]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onClickUp = () => {
    const body = {
      direction: 1,
    };
    if (userVote) {
      if (userVote === -1) {
        changePostVote(body, post.id, setOpen);
        setUserVote(1);
        setVoteSum(voteSum + 2);
        setColorButtonUp("primary");
        setColorButtonDown("default");
      } else if (userVote === 1) {
        deletePostVote(post.id, setOpen);
        setUserVote(0);
        setVoteSum(voteSum - 1);
        setColorButtonUp("default");
      }
    } else {
      createPostVote(body, post.id, setOpen);
      setUserVote(1);
      setVoteSum(voteSum + 1);
      setColorButtonUp("primary");
    }
  };

  const onClickDown = () => {
    const body = {
      direction: -1,
    };
    if (userVote) {
      if (userVote === 1) {
        changePostVote(body, post.id, setOpen);
        setUserVote(-1);
        setVoteSum(voteSum - 2);
        setColorButtonDown("primary");
        setColorButtonUp("default");
      } else if (userVote === -1) {
        deletePostVote(post.id, setOpen);
        setUserVote(0);
        setVoteSum(voteSum + 1);
        setColorButtonDown("default");
      }
    } else {
      createPostVote(body, post.id, setOpen);
      setUserVote(-1);
      setVoteSum(voteSum - 1);
      setColorButtonDown("primary");
    }
  };

  const onClickCard = () => {
    setInfoPost(post)
    goToPost(navigate, post.id);
  };
  return (
    <ContainerCard>
      <TitleCard>
        <h2>{post.username}</h2>
      </TitleCard>
      <BodyCard onClick={onClickCard}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </BodyCard>
      <ButtonsArea>
        <div>
          <IconButton onClick={onClickUp} color={colorButtonUp}>
            <ArrowUpwardIcon />
          </IconButton>
          {voteSum || 0}
          <IconButton onClick={onClickDown} color={colorButtonDown}>
            <ArrowDownwardIcon />
          </IconButton>
        </div>
        <div>{post.commentCount || 0} comentários</div>
      </ButtonsArea>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Ocorreu algum erro!
        </Alert>
      </Snackbar>
    </ContainerCard>
  );
}
