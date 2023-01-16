import '../Component.css';

export default function ClickCounter({ count, incrementCount }) {
    return (
        <button type='button' className='btn' onClick={incrementCount}>Clicked {count} Times</button>
    )

};