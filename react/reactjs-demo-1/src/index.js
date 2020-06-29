import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppContent from "./AppContent";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./Counter";
import Uncontrolled from "./Uncontrolled";

class App extends Component {
  render() {
    const footerProps = {
      website: "https://danyweis.com",
      company: "DanyCode",
      year: 2020,
    };
    return (
      <div className="app">
        {/*title and subheading are now available in AppHeader as props*/}
        <AppHeader title="Address book App " subheading="Created by Dan" />
        <AppContent />
        {/*Two ways of doing this*/}

        <Counter />
        <Uncontrolled />

        <AppFooter {...footerProps} />
        {/* <AppFooter
          website={footerProps.website}
          company={footerProps.company}
          year={footerProps.year}
        /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
