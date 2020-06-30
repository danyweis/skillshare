import React, { Component } from "react";
import ControlledContactForm from "./ControlledContactForm";

class Controlled extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3 className="alert alert-success">Controlled Component</h3>
        <div className="row">
          <div className="col">
            <ControlledContactForm />
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Controlled;
