import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";

import Filter from "./components/Filter";
import LaunchCard from "./components/LaunchCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((response) => {
        this.setState({ launches: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  applyFilter(filters) {
    console.log("Filter", filters);
    let url = "https://api.spaceXdata.com/v3/launches?limit=100";
    if (filters.year !== "") {
      url = url + `&launch_year=${filters.year}`;
    }
    if (filters.launchSuccess !== "") {
      url =
        url +
        `&launch_success=${filters.launchSuccess === "True" ? true : false}`;
    }
    axios
      .get(url)
      .then((response) => {
        this.setState({ launches: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { launches } = this.state;
    return (
      <div className="App">
        <h3 className="AppTitle">SpaceX Launch Programs</h3>
        <div className="Container">
          <Filter applyFilter={(filters) => this.applyFilter(filters)} />
          <div className="MissleContent">
            {launches.map((missile) => {
              return <LaunchCard data={missile} key={missile.flight_number} />;
            })}
          </div>
        </div>
        <div className="developer"><b>Developed by: </b> Arun Natarajan</div>
      </div>
    );
  }
}

export default App;
