import React, { Component } from 'react';
import { render } from 'react-dom';
function App (props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.surname}</h1>
    </div>
  );
}
render(<App name="santosh" surname="swami"/>, document.getElementById('root'));


