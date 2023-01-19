import './components.css';
export default function ClickCounter({ count, incrementCount }) {
    return (
        <button className='btn' type="button" onClick={incrementCount}>Clicked {count} Times</button>
    )
};