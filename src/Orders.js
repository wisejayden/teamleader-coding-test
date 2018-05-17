import React, { Component } from 'react';
import axios from 'axios';
import dummyData from './dummyData.json';


class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: null
        };
        this.handleData = this.handleData.bind(this);
    }
    componentDidMount() {
        axios.get(this.state.api)
            .then((res) => {
                this.handleData(res.data);
            })
            .catch((err) => {
                this.handleData(false);
            })
    }
    handleData(data) {
        if(!data) {
            data = dummyData;
        }
        console.log(data);
    }
    render() {
        return(
            <div>
            </div>
        )
    }
}

export default Orders
