import React, { Component } from "react";

class ContactForm extends Component {
  addNewContact = (event) => {
    console.log("Adding a new Contact");
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const phone = this.refs.phone.value;
    const pic = this.refs.pic.value;

    const p1 = { name, email, phone, pic };
    console.log(p1);

    this.refs.name.value = "";
    this.refs.email.value = "";
    this.refs.phone.value = "";
    this.refs.pic.value = "";
    event.preventDefault();
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
                ref="name"
                type="text"
                name=""
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
                ref="email"
                type="text"
                name=""
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
                ref="phone"
                type="text"
                name=""
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
                ref="pic"
                type="text"
                name=""
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

export default ContactForm;
