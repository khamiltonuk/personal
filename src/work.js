import React from "react";
import { Growth } from "./growth.js";

export class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGrowth: false,
    };
  }

  handleClickGrowth() {
      this.setState({
        showGrowth: true,
      });
    }

    hideGrowth() {
      this.setState({ showGrowth: false });
    }

  render() {
    return (
      <div className="modal">
        <button onClick={this.props.close} className="btn">
          <i className="fa fa-close" />
        </button>
          <div id="about">
            <p>
              Quality Assurance<br /> Copywrite <br /> Design <br /> Growth <br /> Software Development
              </p>
              <a onClick={e => this.handleClickGrowth()}  href="#">
            Growth
          </a>

          {this.state.showGrowth && (
                    <Growth  close={e => this.hideGrowth()  } /> )}
      </div>
      </div>
    );
  }
}
