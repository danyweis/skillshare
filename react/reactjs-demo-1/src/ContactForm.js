import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h3>Add a new Contact</h3>
        <form className="form">
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Name
            </label>
            <div className="col-md-8">
              <input type="text" name="" id="" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Email
            </label>
            <div className="col-md-8">
              <input type="text" name="" id="" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Phone Number
            </label>
            <div className="col-md-8">
              <input type="text" name="" id="" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Picture
            </label>
            <div className="col-md-8">
              <input type="text" name="" id="" className="form-control" />
            </div>
          </div>
          <button className="btn btn-primary">Save Data</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
