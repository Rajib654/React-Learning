import React from 'react';
import './App.css';

function App() {
  // Create A new Element

  // const element = React.createElement('h1', {className:'heading'}, "Hello World"); //First Parameter= element Type,2nd Parameter= element properties,3rd Parameter= element content


  const element = (<h1 className='heading'>
    <span type='text'>Hello World</span>
  </h1>) // To write multi line use () symbol & to provide element properties use camelcasing 

  /*
   element ={
    type:'h1',
    props:{
      className:"heading",
      children:"Hello World"
    },
   };
   */

  return (
    element
  );
}

export default App;
