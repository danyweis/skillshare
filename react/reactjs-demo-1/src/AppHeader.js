import React, { Component, Fragment } from "react";

export default class AppHeader extends Component {
  render() {
    // console.log(this.props);
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <p>{this.props.subheading}</p>
        <hr />
      </Fragment>
    );
  }
}
