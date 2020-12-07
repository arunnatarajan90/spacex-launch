import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      launchSuccess: "",
    };
  }

  updateFilterSelection(selection, criteria) {
    let { year, launchSuccess } = this.state;
    this.setState({ [criteria]: selection });
    if (criteria === "year") {
      year = selection;
    } else {
      launchSuccess = selection;
    }
    this.props.applyFilter({ year, launchSuccess });
  }

  render() {
    const filterYears = [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
    ];
    const filterLaunch = ["True", "False"];
    const { year, launchSuccess } = this.state;
    return (
      <div className="Filter">
        <h6>Filters</h6>
        <div>
          <div className="filterTitle">Launch Year</div>
          <div className="filterContent">
            {filterYears.map((y) => {
              return (
                <div
                  key={y}
                  className={year === y ? "selected" : ""}
                  onClick={() => this.updateFilterSelection(y, "year")}
                >
                  {y}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="filterTitle">Successful Launch</div>
          <div className="filterContent">
            {filterLaunch.map((launch) => {
              return (
                <div
                  key={launch}
                  className={launchSuccess === launch ? "selected" : ""}
                  onClick={() =>
                    this.updateFilterSelection(launch, "launchSuccess")
                  }
                >
                  {launch}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
