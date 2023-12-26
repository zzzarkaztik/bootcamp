import React, { Component } from "react";
import "../js/toggler.js";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="display-1">About Us</h1>
        <img
          src={require("../img/company.avif")}
          className="img-fluid object-fit"
          alt="company meeting"
        />
        <p>The CAD Company was established 1988 as a result of Martial Law.</p>
        <button className="btn btn-primary" id="hide_p">
          Hide
        </button>
      </div>
    );
  }
}

export default About;
