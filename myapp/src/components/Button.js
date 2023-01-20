import React from "react";
export default class Button extends React.Component {
    shouldComponentUpdate(nextProps) { //shouldComponentUpdate is a React lifeCycle Mathode,when its call then it get two props 01.next state 02.next props
        const { buttonName: oldButton } = this.props;
        const { buttonName: updatedButton } = nextProps;
        const update = oldButton === updatedButton ? false : true;
        return update;
    } // this function used for repeated button redering stopping.
    render() {
        console.log(`Button component rendered`);
        const { change, buttonName } = this.props;
        return (
            <button type="button" onClick={change}>{buttonName}</button>
        )
    }
}