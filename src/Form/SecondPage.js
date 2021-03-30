import React, { Component } from "react";

class SecondPage extends Component {
  render() {
    return (
      <div>
        <label>EmployeeID:</label>
        <input
          type="number"
          name="EmployeeId"
          value={this.props.employeeId}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default SecondPage;
