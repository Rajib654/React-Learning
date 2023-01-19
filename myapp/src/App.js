import './App.css';
import '../src/components/components.css'
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import logo from './logo.svg';
import React from 'react';
import ThemeContext from './context/themeContext'

class App extends React.Component {
  state = {
    theme: "light",
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === 'light') {
          return { theme: 'dark' }
        } else {
          return { theme: 'light' }
        }
      })
    },
  }

  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter>
            {(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
          </Counter>
          <ThemeContext.Provider value={this.state}><Section /></ThemeContext.Provider>
        </header>
      </div>
    );
  }
}



export default App;
