import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import style, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

const Bounce = styled.div`
  animation: 1s ${bounceAnimation};
`;

export default function Homepage(props) {
  return (
    <Grid container className="home" justify="center" alignItems="center">
      <Grid item xs={12} className="container">
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
          <Grid item xs={2} className="select-mode">
            <Link to="/app">You vs Computer</Link>
          </Grid>
          <Grid item xs={2} className="select-mode">
            <Link to="/app">Computer vs Computer</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
