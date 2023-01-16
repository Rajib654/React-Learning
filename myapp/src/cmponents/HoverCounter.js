import React from 'react';
import '../Component.css';

export default class HoverCounter extends React.Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <h1 className='heading' onMouseOver={incrementCount}> Hovered {count} Times</h1>
        )
    }
}