import React from "react";
import { Grid, Button } from "@material-ui/core";

export default function App(props) {
  const [play, setPlay] = React.useState("");
  const [startPlay, setStartPlay] = React.useState(false);
  const [opponent, setOpponent] = React.useState("");
  const [options, setOptions] = React.useState(["rock", "paper", "scissors"]);
  const [winner, setWinner] = React.useState("");

  const handlePlay = play => e => {
    setPlay("");
    setOpponent("");
    setWinner("");
    setStartPlay(true);

    setTimeout(() => {
      setStartPlay(false);
      setPlay(play);
      randomize();
    }, 1000);
  };

  const randomize = () => {
    let option = Math.floor(Math.random() * (1 + 2 - 0)) + 0;

    setOpponent(options[option]);

    setTimeout(() => {
      getWinner();
    }, 5000);
  };

  const getWinner = () => {
    if (
      (play === "rock" && opponent === "scissors") ||
      (play === "paper" && opponent === "rock") ||
      (play === "scissors" && opponent === "paper")
    ) {
      return "player 1";
    } else if (
      (play === "scissors" && opponent === "rock") ||
      (play === "rock" && opponent === "paper") ||
      (play === "paper" && opponent === "scissors")
    ) {
      return "player 2";
    } else if (play === opponent && play !== "" && opponent !== "") {
      return "draw";
    } else {
      return "";
    }
  };

  return (
    <>
      <Grid
        container
        className={startPlay ? "container field start" : "container field"}
      >
        <Grid
          item
          xs={12}
          className={getWinner() !== "" ? "results show" : "results"}
        >
          <h1>
            <p>
              {getWinner() === ""
                ? ""
                : getWinner() === "draw"
                ? "draw"
                : getWinner() + " wins!"}
            </p>
          </h1>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          sm={6}
          className="left"
        >
          <p className="hand">
            {play === "rock" ? (
              <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
            ) : play === "paper" ? (
              <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
            ) : play === "scissors" ? (
              <i
                className="fa fa-hand-scissors-o scissors"
                aria-hidden="true"
              ></i>
            ) : (
              <i className="fa fa-hand-rock-o " aria-hidden="true"></i>
            )}
          </p>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          xs={12}
          sm={6}
          className="right"
        >
          <p className="hand">
            {opponent === "rock" ? (
              <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
            ) : opponent === "paper" ? (
              <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
            ) : opponent === "scissors" ? (
              <i
                className="fa fa-hand-scissors-o scissors"
                aria-hidden="true"
              ></i>
            ) : (
              <i className="fa fa-hand-rock-o " aria-hidden="true"></i>
            )}
          </p>
        </Grid>
      </Grid>
      <div className="select-play">
        <Grid container>
          <Grid item xs={4}>
            <Button className="hand" onClick={handlePlay("rock")}>
              <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className="hand" onClick={handlePlay("paper")}>
              <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className="hand " onClick={handlePlay("scissors")}>
              <i
                className="fa fa-hand-scissors-o scissors"
                aria-hidden="true"
              ></i>
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
