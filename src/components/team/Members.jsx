import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import TeamCard from "./TeamCard";

class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    var url = "https://api.github.com/orgs/acmiitr/public_members";
    fetch(url)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(d => {
        this.setState({
          data: d
        });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div>
        <Grid container spacing={8} style={{ padding: "8px" }}>
          {/* <Grid item xs={12}>
            <h1 style={{ textAlign: "left", marginBottom: "40px" }}>We are family</h1>
          </Grid> */}

          {// members.map((member, i) => (
          this.state.data != []
            ? Array.from(this.state.data).map((member, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <TeamCard image={member.avatar_url} name={member.login} />
                </Grid>
              ))
            : null}
        </Grid>
      </div>
    );
  }
}

export default TeamPage;
