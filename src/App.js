import React from "react";
import "./App.scss";
import "font-awesome/css/font-awesome.min.css";
import { Grid, Button } from "@material-ui/core";

export default function App(props) {
  const [play, setPlay] = React.useState(0);

  const handlePlay = play => {
    setPlay(play);
  };

  return (
    <Grid container className="container">
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
          <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
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
          <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
        </p>
      </Grid>

      <div className="select-play">
        <h1>Player</h1>
        <Grid container>
          <Grid item xs={4}>
            <Button className="hand">
              <i className="fa fa-hand-rock-o" aria-hidden="true"></i>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className="hand">
              <i className="fa fa-hand-paper-o" aria-hidden="true"></i>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className="hand scissors">
              <i className="fa fa-hand-scissors-o" aria-hidden="true"></i>
            </Button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
