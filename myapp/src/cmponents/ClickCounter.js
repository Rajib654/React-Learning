import React from 'react';
import '../Component.css';

export default class ClickCounter extends React.Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <button type='button' className='btn' onClick={incrementCount}>Clicked {count} Times</button>
        )
    }
}