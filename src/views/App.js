import React from "react";
import { Grid, Button } from "@material-ui/core";

export default function App(props) {
  const [play, setPlay] = React.useState("");
  const [startPlay, setStartPlay] = React.useState(false);
  const [opponent, setOpponent] = React.useState("");
  const options = ["rock", "paper", "scissors"];

  React.useEffect(() => {
    setPlay("");
    setOpponent("");
  }, [props.mode]);

  const handlePlay = play => {
    setPlay("");
    setOpponent("");
    setStartPlay(true);

    setTimeout(() => {
      setStartPlay(false);
      randomize();

      if (play === "rand") {
        let option = Math.floor(Math.random() * (1 + 2 - 0)) + 0;

        setPlay(options[option]);
      } else {
        setPlay(play);
      }
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
      return props.mode === "Player" ? "You win!" : "Player 1 wins!";
    } else if (
      (play === "scissors" && opponent === "rock") ||
      (play === "rock" && opponent === "paper") ||
      (play === "paper" && opponent === "scissors")
    ) {
      return "Player 2 wins!";
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
        className={
          startPlay
            ? "container field start " + props.mode
            : "container field " + props.mode
        }
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          sm={6}
          className="left"
        >
          <h1>{props.mode === "Player" ? props.name : "Player 1"}</h1>
          <p className="hand">
            {play === "rock" ? (
              <>
                <i className="fa fa-hand-rock" aria-hidden="true"></i>{" "}
                <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
              </>
            ) : play === "paper" ? (
              <>
                <i className="fa fa-hand-paper" aria-hidden="true"></i>
                <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
              </>
            ) : play === "scissors" ? (
              <>
                <i
                  className="fa fa-hand-scissors scissors"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-hand-scissors-o scissors"
                  aria-hidden="true"
                ></i>
              </>
            ) : (
              <>
                <i className="fa fa-hand-rock" aria-hidden="true"></i>
                <i className="fa fa-hand-rock-o " aria-hidden="true"></i>
              </>
            )}
          </p>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          className={getWinner() !== "" ? "results show" : "results"}
        >
          <h1>
            <p>
              {getWinner() === ""
                ? ""
                : getWinner() === "draw"
                ? "it's a draw"
                : getWinner()}
            </p>
          </h1>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          xs={12}
          sm={6}
          className="right"
        >
          <h1>Player 2</h1>
          <p className="hand">
            {opponent === "rock" ? (
              <>
                <i className="fa fa-hand-rock" aria-hidden="true"></i>{" "}
                <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
              </>
            ) : opponent === "paper" ? (
              <>
                <i className="fa fa-hand-paper" aria-hidden="true"></i>
                <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
              </>
            ) : opponent === "scissors" ? (
              <>
                <i
                  className="fa fa-hand-scissors scissors"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-hand-scissors-o scissors"
                  aria-hidden="true"
                ></i>
              </>
            ) : (
              <>
                <i className="fa fa-hand-rock" aria-hidden="true"></i>
                <i className="fa fa-hand-rock-o " aria-hidden="true"></i>
              </>
            )}
          </p>
        </Grid>
      </Grid>
      <div className={"select-play " + props.mode}>
        <Grid container justify="center" spacing={3}>
          {props.mode === "Player" ? (
            <>
              <Grid item xs={12}>
                <h3>Choose your play</h3>
              </Grid>
              <Grid item xs={4}>
                <Button className="hand" onClick={() => handlePlay("rock")}>
                  <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button className="hand" onClick={() => handlePlay("paper")}>
                  <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button className="hand" onClick={() => handlePlay("scissors")}>
                  <i
                    className="fa fa-hand-scissors-o scissors"
                    aria-hidden="true"
                  ></i>
                </Button>
              </Grid>
            </>
          ) : (
            <Grid item xs={4}>
              <Button onClick={() => handlePlay("rand")}>Draw</Button>
            </Grid>
          )}
        </Grid>
      </div>
    </>
  );
}
