import React, { useState, useEffect } from "react";
import { ButtonsArea, ContainerCard, TitleCard } from "./styles/StyleCard";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import {
  changeCommentVote,
  createCommentVote,
  deleteCommentVote,
} from "../services/comments";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CardComment({ post }) {
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
        changeCommentVote(body, post.id, setOpen);
        setUserVote(1);
        setVoteSum(voteSum + 2);
        setColorButtonUp("primary");
        setColorButtonDown("default");
      } else if (userVote === 1) {
        deleteCommentVote(post.id, setOpen);
        setUserVote(0);
        setVoteSum(voteSum - 1);
        setColorButtonUp("default");
      }
    } else {
      createCommentVote(body, post.id, setOpen);
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
        changeCommentVote(body, post.id, setOpen);
        setUserVote(-1);
        setVoteSum(voteSum - 2);
        setColorButtonDown("primary");
        setColorButtonUp("default");
      } else if (userVote === -1) {
        deleteCommentVote(post.id, setOpen);
        setUserVote(0);
        setVoteSum(voteSum + 1);
        setColorButtonDown("default");
      }
    } else {
      createCommentVote(body, post.id, setOpen);
      setUserVote(-1);
      setVoteSum(voteSum - 1);
      setColorButtonDown("primary");
    }
  };

  return (
    <ContainerCard>
      <TitleCard>
        <h2>{post.username}</h2>
      </TitleCard>
      <p className="comment">{post.body}</p>
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
      </ButtonsArea>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Ocorreu algum erro!
        </Alert>
      </Snackbar>
    </ContainerCard>
  );
}
