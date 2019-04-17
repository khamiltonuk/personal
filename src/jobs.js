import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';

export class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    componentDidMount() {
        axios.get("/getJobs").then(result => {
                    this.setState({jobData: result.data});
        });

        axios.get("/getDate").then(result => {
            this.setState({dateData: result.data});
        });
    }

    handleChangeJob(event) {
        this.setState({
            [event.target.name]: event.target.value,
            userSelectionJob: event.target.value
        })
    }

    handleChangeArea(event) {
        this.setState({
            [event.target.name]: event.target.value,
            userSelectionArea: event.target.value
        })
    }

    handleSubmit(event) {
        location.replace('/loginorregister');
    }

    handleClick(event) {
        this.setState({
            show: true,
            selectedJobId: event
        })
    }

    hideModal() {
        this.setState({show: false});
    }

    render() {
        if (!this.state.jobData) {
            return null;
        }
        return (
            <div className="bg">
                <h1>This is just a piece of text. But It means that this boilerplate is working. Hurrah!</h1>

            </div>
        );
    }
}
