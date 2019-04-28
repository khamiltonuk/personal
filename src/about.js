import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


render() {
  return (
    <div className="modal">
      <button onClick={this.props.close} className="btn">
        <i className="fa fa-close" />
      </button>
      <form method="post" onSubmit={() => this.props.submit(this.state)}>
        <div id="about">
          <p>
          Hi there, Im Wilfredo, or well, at least Im his website. He has given me full powers to speak in his behalf though, and so I will. <br /> Wilfredo is looking for a job, specially if it is in a solid startup where he can hone his software development skills, which at the moment are rookie at best. <br />
          </p>
        </div>
      </form>
    </div>
  );
}
}
