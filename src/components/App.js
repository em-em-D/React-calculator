import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="box">
        <div className="display">
          <Display />
        </div>
        <div className="button">
          <ButtonPanel handleClick={this.handleClick} />
        </div>

      </div>
    );
  }
}

export default App;
