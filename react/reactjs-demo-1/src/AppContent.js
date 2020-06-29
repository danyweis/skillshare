import React, { Component } from "react";
import "./AppContent.css";

class AppContent extends Component {
  // constructor() {
  //   super();
  //   this.btnHandler = this.btnHandler.bind(this);
  // }
  // btnHandler() {
  //   console.log("Button 1 clicked", this);
  // }

  btnHandler = () => {
    console.log("Button 1 clicked", this);
  };

  render() {
    return (
      <div className="app-content">
        <h3>Powered by ReactJS</h3>
        {/* <button onClick={this.btnHandler.bind(this)} className="btn btn-primary"> */}
        <button onClick={this.btnHandler} className="btn btn-primary">
          Button 1
        </button>
      </div>
    );
  }
}

export default AppContent;
