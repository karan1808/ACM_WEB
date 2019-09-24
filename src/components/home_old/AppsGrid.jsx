import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import { Link, withRouter } from "react-router-dom";
import appetizer from "../../assets/1.png";
import musicdna from "../../assets/2.jpeg";
import campusbuddy from "../../assets/3.jpeg";
import SeeMoreCard from "./SeeMoreCard";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  link: {
    textDecoration: "none",
    color: "inherit"
  }
});

class AppsGrid extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item md={3} sm={6} xs={12}>
            <a href="https://medium.com/@karanlamba1808/discussion-sessions-fc3d3579eb56">
              <ProjectCard image={appetizer} />
            </a>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <a href="https://medium.com/@karanlamba1808/microsoft-talk-9224ab2a4b9a">
              <ProjectCard image={musicdna} />
            </a>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <a href="https://medium.com/@karanlamba1808/winter-technical-school-workshop-be117cc3d313">
              <ProjectCard image={campusbuddy} />
            </a>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <a href="/projects" className={classes.link}>
              <SeeMoreCard project="Events" />
            </a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AppsGrid);
