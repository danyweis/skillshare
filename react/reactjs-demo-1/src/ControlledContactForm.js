import React, { Component } from "react";

class ControlledContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    pic: "",
  };

  evHandler = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    console.log(name, value);
  };

  render() {
    return (
      <div>
        <h3>Add a new Contact</h3>
        <form className="form" onSubmit={this.addNewContact}>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Name
            </label>
            <div className="col-md-8">
              <input
                value={this.state.name}
                onChange={this.evHandler}
                name="name"
                type="text"
                id=""
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Email
            </label>
            <div className="col-md-8">
              <input
                value={this.state.email}
                onChange={this.evHandler}
                name="email"
                type="text"
                id=""
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Phone Number
            </label>
            <div className="col-md-8">
              <input
                value={this.state.phone}
                onChange={this.evHandler}
                name="phone"
                type="text"
                id=""
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Picture
            </label>
            <div className="col-md-8">
              <input
                value={this.state.pic}
                onChange={this.evHandler}
                name="pic"
                type="text"
                id=""
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary">Save Data</button>
        </form>
      </div>
    );
  }
}

export default ControlledContactForm;
