import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrileroMesa from './components/TrileroMesa';
import TrileroCubos from './components/TrileroCubos';
import TrileroPuntos from './components/TrileroPuntos';

class App extends Component {
  render() {
    return <div className="app">
        <TrileroCubos />
        <TrileroMesa />
        <TrileroPuntos />
    </div>
  }
}

export default App;
