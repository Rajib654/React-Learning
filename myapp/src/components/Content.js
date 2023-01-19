import Counter from "./Counter"
import HoverCounter from "./HoverCounter"
import ThemeContext from '../context/themeContext'
import { useContext } from "react"
export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>This is Content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    )
}

/*
export default class Content extends React.Component {
    render() {
        const { theme, switchTheme } = this.context;
        return (
            <div>
                <h1>This is Content</h1>
                <Counter>
                    {(count, incrementCount) => (
                        <HoverCounter
                            count={count}
                            incrementCount={incrementCount}
                            theme={theme}
                            switchTheme={switchTheme}
                        />
                    )}
                </Counter>
            </div>
        )
    }

}
Content.contextType = ThemeContext;
*/