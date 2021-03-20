import React, { Component } from "react";
import loadMyPlan from "./../services/loadMyPlan";

class SharedPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: [],
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

        <div>
          {this.state.mainData.map((value, index) => {
            return (
              <div key={index}>
                <div className="p-3 my-4">
                  <h1 className="text-center mb-4">Semester {index + 1}</h1>
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Course ID</th>
                        <th scope="col">Credits</th>
                        <th scope="col">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {value.map((val, index) => {
                        return (
                          
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td>{val[0]}</td>
                              <td>{val[1]}</td>
                              <td>{val[2]}</td>
                              <td>{val[3]}</td>
                            </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>  
      </div>
    );
  }
}

export default SharedPlan;
