import React from 'react'
import { About } from "./about.js";
import { Work } from "./work.js";
import { Contact } from "./contact.js";

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              showAbout: false,
              showWork: false,
              showContact: false
            };
    }

    handleClickAbout() {
        this.setState({
          showAbout: true
        });
      }

      hideAbout() {
        this.setState({ showAbout: false });
      }

      handleClickWork() {
          this.setState({
            showWork: true
          });
        }

        hideWork() {
          this.setState({ showWork: false });
        }

        handleClickContact() {
            this.setState({
              showContact: true
            });
          }

          hideContact() {
            this.setState({ showContact: false });
          }


    render() {
          return (
            <div className="bg">
                <h1 className="mainTitle">Wilfredo Casas</h1>
                <a onClick={e => this.handleClickAbout()} href="#">
              About me
            </a>
            <br />
            <a onClick={e => this.handleClickWork()} href="#">
          My work
        </a>
        <br />
        <a onClick={e => this.handleClickContact()} href="#">
      Contact
    </a>


                {this.state.showAbout && (
                          <About close={e => this.hideAbout()} />
                        )}

                        {this.state.showWork && (
                                  <Work close={e => this.hideWork()} />
                                )}
                                {this.state.showContact && (
                                          <Contact close={e => this.hideContact()} />
                                        )}
            </div>
        );
    }
}
