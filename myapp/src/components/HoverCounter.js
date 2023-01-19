import './components.css'
export default function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: "#000", color: "#fff" } : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hover {count} Times</h1>
            <button className='btn' type="button" onClick={switchTheme}>Change Theme</button>
        </div>
    )
};