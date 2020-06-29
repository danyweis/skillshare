import React, { Component } from "react";

// const Btn = (props) => (
//   <button className="btn btn-primary" onClick={props.handler}>
//     {props.caption}
//   </button>
// );
const Btn = ({ caption, handler }) => (
  <button className="btn btn-primary" onClick={handler}>
    {caption}
  </button>
);

class Counter extends Component {
  state = { num: 0 };

  // increment = () => {
  //   this.setState({ num: this.state.num + 1 });
  // };

  // decrement = () => {
  //   this.setState({ num: this.state.num - 1 });
  // };

  incrementOrDecrement = (incVal) => {
    this.setState({ num: this.state.num + incVal });
  };

  render() {
    console.log("render() is invoked");
    return (
      <div className="container">
        <hr />
        <h1 className="alert alert-info">React counter app</h1>
        <h2> Value of num is {this.state.num}</h2>

        {/* This is with the Const on top */}

        <Btn caption="increment" handler={() => this.incrementOrDecrement(1)} />
        <Btn
          caption="decrement"
          handler={() => this.incrementOrDecrement(-1)}
        />

        {/* <button className="btn btn-primary" onClick={this.increment}>
          Increment
        </button> */}
        {/* <button className="btn btn-danger" onClick={this.decrement}>
          decrement
        </button> */}

        {/* <button
          className="btn btn-primary"
          onClick={() => this.incrementOrDecrement(1)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.incrementOrDecrement(-1)}
        >
          decrement
        </button> */}
        <hr />
      </div>
    );
  }
}

export default Counter;
