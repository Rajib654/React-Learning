import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import logo from './logo.svg';
import React from 'react';

class App extends React.Component {
  state = { theme: "dark", }
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter>
            {(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
          </Counter>
          <Section theme={theme} />
        </header>
      </div>
    );
  }
}



export default App;
