import React, { Component } from 'react';
import './App.css';
import Container from './Container'

class App extends Component {

constructor() {
  super();
  this.state = {
    images: []
  };
}

  render() {
    return (
      <Container />
    );
  }
}

export default App;
