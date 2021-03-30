import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FirstPage from "./Form/FirstPage";
import SecondPage from "./Form/SecondPage";
import View from "./Form/View";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      SecondName: "",
      EmployeeId: "",
    };
  }

  onChangeHandler = (evt) => {
    this.setState({
      ...this.state,
      [evt.target.name]: evt.target.value,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Link to="/FirstPage">First Page</Link>
          <Link to="/SecondPage" style={{ marginLeft: "10px" }}>
            Second Page
          </Link>
          <Link to="/View" style={{ marginLeft: "10px" }}>
            View
          </Link>
          <div style={{ marginTop: "20px" }}>
            <Switch>
              <Route path="/FirstPage">
                <FirstPage
                  firstName={this.state.FirstName}
                  secondName={this.state.SecondName}
                  onChange={this.onChangeHandler}
                />
              </Route>
              <Route path="/SecondPage">
                <SecondPage
                  employeeId={this.state.EmployeeId}
                  onChange={this.onChangeHandler}
                />
              </Route>
              <Route path="/View">
                <View
                  firstName={this.state.FirstName}
                  secondName={this.state.SecondName}
                  employeeId={this.state.EmployeeId}
                />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
