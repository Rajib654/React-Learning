import logo from './logo.svg';
import './App.css';

function App({ local }) {
  return (
    <h1 className='heading'>
      <span type="text">Hello {new Date().toLocaleTimeString(local)}</span>
    </h1>
  );
}

//Here App function called component & only return section called element
// One React Component return one single element
// We can re-use React Component
//Component received properties form outside & use this properties in their inside element.

export default App;
