import logo from './logo.svg';
import './App.css';

import ClickCounter from './cmponents/ClickCounter';
import HoverCounter from './cmponents/HoverCounter';
import Counter from './cmponents/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter>
          {(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
        </Counter>

        <Counter>
          {(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />}
        </Counter>
      </header>
    </div>
  );
}

export default App;
