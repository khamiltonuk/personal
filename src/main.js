import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
          return (
            <div className="bg">
                <h1>Wilfredo</h1>
                <p>About me</p>
                <p>My work</p>
                <p>Contact</p>


            </div>
        );
    }
}
