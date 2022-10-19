
import React, { Component } from 'react';
import Movies from './components/Movies';
import Code from './notes&functions/Code';
// import './App.css';

// why does this function have to be outside of the class App ?
function add(){
  let a = 1;
  let b = 2;
  let answer = a + b;
  return answer
}

const subtract = () => {
  let a = 1;
  let b = 2;
  let answer = a - b;
  return answer
}

class App extends Component {
  
  state = {
    adding: add(),
    subtracting: subtract()
  }
// why is return inside render block in app.js but not is movies.jsx?
  render(){
    // theres always just one main element that we can return.
    return (
      <main className="container">
       {/* < Code /> */}
      <Movies/>
       {/* <h1>{this.state.adding}</h1>
       <h1>{this.state.subtracting}</h1> */}
      </main>
    );
  }
}
  

export default App;
