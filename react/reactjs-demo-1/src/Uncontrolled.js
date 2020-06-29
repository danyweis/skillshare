import React, { Component } from "react";
import ContactForm from "./ContactForm";

class Uncontrolled extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3 className="alert alert-warning">
          Using "refs" (Uncontrolled Components
        </h3>
        <div className="row">
          <div className="col">
            <ContactForm />
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Uncontrolled;
