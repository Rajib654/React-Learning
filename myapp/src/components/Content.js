import Counter from "./Counter"
import HoverCounter from "./HoverCounter"
export default function Content({ theme }) {
    return (
        <div>
            <h1>This is Content</h1>
            <Counter>
                {(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} theme={theme} />}
            </Counter>
        </div>
    )
}