import React from "react";

class Clock extends React.Component {
    /*
    constructor(props) {
        super(props);//"super" just calls base class constructor
        this.state = { date: new Date() }
    }
    */
    //When props never used in the constructor then we define state in another sutcut way
    state = { date: new Date(), }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);//setInterval() function stored into clockTimer mathode(user defined).

    }//componentDidMount() is React Life_Cycle Hok and its runs after component has been renderd to the DOM
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    } //this function is used for stop the timer for better performance
    tick() {
        this.setState({
            date: new Date()
        })
    } //Here Tick function also used for change state of date
    render() {
        return (
            <h1 className="heading">
                <span type="text">{this.state.date.toLocaleTimeString(this.props.local)}</span>
            </h1>
        )
    }
}
export default Clock;

//State is "data thats changes" and also javaScript Object