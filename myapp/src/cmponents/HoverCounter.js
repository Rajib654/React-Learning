import '../Component.css';

export default function HoverCounter({ count, incrementCount }) {
    return (
        <h1 className='heading' onMouseOver={incrementCount}> Hovered {count} Times</h1>
    )
};