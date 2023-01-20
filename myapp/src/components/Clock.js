import React from "react";
import Button from "./Button";

class Clock extends React.Component {
    state = { date: new Date(), local: "bn-BD", buttonName: "ঘড়ি পরিবর্তন করুন", }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);

    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState((s) => {
            if (s.local === "bn-BD") {
                return { local: "en-US", buttonName: "Change Clock" }
            } else {
                return { local: "bn-BD", buttonName: "ঘড়ি পরিবর্তন করুন" }
            }
        })
    }
    render() {
        const { date, local, buttonName } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span type="text">{date.toLocaleTimeString(local)}</span>
                </h1>
                <Button change={this.handleClick} buttonName={buttonName} />
            </div>
        )
    }
}
export default Clock;

