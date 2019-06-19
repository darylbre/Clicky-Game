import React from 'react';
import logo from './logo.svg';
import './App.css';
import drummers from "./drummers.json";

class App extends React.Component {

  state = {
    drummers: drummers
  };


  render() {
    return (
      <div>{this.state.drummers.map(drummer => (
        <div><img src = {drummer.image}/></div>
      ))}
      </div>
    // Render the function to click drummers and get score and also check if you have already clicked a drummer
    );
  }
}

export default App;
