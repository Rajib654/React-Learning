export default function HoverCounter({ count, incrementCount, theme }) {
    const style = theme === 'dark' ? { backgroundColor: "#000", color: "#fff" } : null;
    return (
        <h1 onMouseOver={incrementCount} style={style}>Hover {count} Times</h1>
    )
};