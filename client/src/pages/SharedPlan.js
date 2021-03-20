import React, { Component } from "react";
import loadMyPlan from "./../services/loadMyPlan";

class SharedPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: null,
      statusMessage: null,
    };
    this.load();
  }

  async load() {
    let res = await loadMyPlan(this.props.match.params.name);
    if (res.data.status) {
      await this.setState({
        mainData: res.data.data[0],
      });
    } else {
      await this.setState({
        statusMessage: (
          <div
            class="alert alert-danger text-center p-5 display-3"
            role="alert"
          >
            Sorry! Plan not found.
            <br /> Contact admin.
          </div>
        ),
      });
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron display-4 text-center">
          Plan: {this.props.match.params.name}
        </div>
        <div>{this.state.statusMessage}</div>
        <div>{this.state.mainData}</div>
      </div>
    );
  }
}

export default SharedPlan;
