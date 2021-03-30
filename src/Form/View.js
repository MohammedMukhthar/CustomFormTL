import React, { Component } from "react";

class View extends Component {
  render() {
    return (
      <div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="FirstName"
            value={this.props.firstName}
            readOnly={true}
            style={{ marginLeft: "30px" }}
          />
        </div>
        <div>
          <label>Second Name:</label>
          <input
            type="text"
            name="SecondName"
            value={this.props.secondName}
            readOnly={true}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div>
          <label>EmployeeID:</label>
          <input
            type="text"
            name="EmployeeId"
            value={this.props.employeeId}
            readOnly={true}
            style={{ marginLeft: "25px" }}
          />
        </div>
      </div>
    );
  }
}

export default View;
