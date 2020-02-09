import React from "react";
import { Grid, Button, Input } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

import App from "./App";

const bounceAnimation = keyframes`${bounce}`;

const Bounce = styled.div`
  animation: 1.5s ${bounceAnimation};
`;

export default function Homepage(props) {
  const [mode, setMode] = React.useState("");
  const [name, setName] = React.useState("Challenger");
  const [reset, setReset] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(0); // 0 - select, 1 - input name, 2 - computer

  const selectMode = mode => event => {
    setMode(mode);
    document.getElementById("home").classList.add("hide");
    setTimeout(() => {
      document.getElementById("mode-container").classList.add("hide");
      if (mode === "Player") {
        setShowPanel(1);
        document.getElementById("name-container").classList.add("show");
      } else {
        setShowPanel(2);
        document.getElementById("field-container").classList.add("show");
      }
    }, 1000);
    event.preventDefault();
  };

  const handleName = () => {
    document.getElementById("name-container").classList.remove("show");
    setTimeout(() => {
      setShowPanel(2);
      document.getElementById("field-container").classList.add("show");
    }, 1000);
  };

  const backHome = () => {
    setMode("");
    setName("Challenger");
    setShowPanel(0);
    setReset(true);
    document.getElementById("home").classList.remove("hide");
    document.getElementById("mode-container").classList.remove("hide");
    document.getElementById("field-container").classList.remove("show");
    document.getElementById("name-container").classList.remove("show");
  };

  return (
    <Grid
      container
      className="home"
      id="home"
      justify="center"
      alignItems="center"
    >
      {showPanel > 0 ? (
        <Grid item sm={6} className="back-to-menu">
          <Button onClick={() => backHome()}>
            <i className="fas fa-chevron-circle-left"></i> Back to menu
          </Button>
        </Grid>
      ) : (
        ""
      )}
      <Grid
        item
        xs={12}
        className="container mode-container"
        id="mode-container"
      >
        <Grid item xs={12}>
          <Bounce>
            <h1>Rock, paper, scissors</h1>
          </Bounce>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="mode-list"
          spacing={3}
          xs={12}
        >
          <Grid item xs={12} sm={4} lg={3} className="select-mode">
            <Button onClick={selectMode("Player")}>You vs Computer</Button>
          </Grid>
          <Grid item xs={12} sm={4} lg={3} className="select-mode">
            <Button onClick={selectMode("Computer")}>
              Computer vs Computer
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        className="container name-container"
        id="name-container"
      >
        <div className="container">
          <h2>What's your name?</h2>
          <Input
            id="outlined-basic"
            label="What's your name?"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <Button onClick={() => handleName()}>Start</Button>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        className="container field-container"
        id="field-container"
      >
        <App mode={mode} name={name} reset={reset} />
      </Grid>
    </Grid>
  );
}
