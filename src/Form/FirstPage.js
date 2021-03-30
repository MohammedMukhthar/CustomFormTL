import React, { Component } from "react";

class FirstPage extends Component {
  render() {
    return (
      <div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="FirstName"
            value={this.props.firstName}
            onChange={this.props.onChange}
          />
        </div>
        <div>
          <label>Second Name:</label>
          <input
            type="text"
            name="SecondName"
            value={this.props.secondName}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default FirstPage;
