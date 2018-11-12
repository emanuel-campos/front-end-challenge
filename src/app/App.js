import React, { Component } from 'react';
import Home from './screens/Home/Home';

// estilo Sass para o componente
import './App.style.scss';

/**
 * Este componente é responsável por iniciar a aplicação App
 */

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
