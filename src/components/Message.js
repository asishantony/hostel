import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() { this.setState({ date: new Date() }); }
    render() {

        return <h1 className='welcome'>The Current Time is - {this.state.date.toLocaleTimeString()}</h1>
    }
}
export default Message;
