import React from "react";

export class Growth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        // console.log("state in handlechange (form.js)", this.state);
      }
    );
  }

  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close} className="btn">
          <i className="fa fa-close" />
        </button>
          <div id="GrowthHacking">
            <p>
            I did some growth hacking once. Good times.
            </p>
          </div>
      </div>
    );
  }
}
