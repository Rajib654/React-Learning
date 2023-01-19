import './App.css';
import React from 'react';

/*
//React functional Component

function App({ local }) {
  return (
    <h1 className='heading'>
      <span type="text">Hello {new Date().toLocaleTimeString(local)}</span>
    </h1>
  );
}

*/

//Here App function called component & only return section called element
// One React Component return one single element
// We can re-use React Component
//Component received properties form outside & use this properties in their inside element.
//Never Change props inside the compmenets
// React component will re-rendered whenever props change

class App extends React.Component {
  render() {
    return (
      <h1 className='heading'>
        <span type="text">Hello-{this.props.children} {new Date().toLocaleTimeString(this.props.local)}</span>
      </h1>
    )
  }
}

export default App;
