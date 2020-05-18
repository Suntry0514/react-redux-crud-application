import React from 'react';
import { render } from '@testing-library/react';

function App() {
  const greeting = "Hi, Jack!";
  const dom = <h1 className="foo">{greeting}</h1>
  return (
    <React.Fragment>
      {dom}
      <label htmlFor="bar">bar</label>
      <input id="bar" type="text" onChange={()=>{console.log("I am clicked!")}}/>

    </React.Fragment>)
  //return <div><h1>Hellow World!</h1></div>;


}

export default App;
