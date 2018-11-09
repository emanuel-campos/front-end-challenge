import React, { Component } from 'react';
import Header from './components/containers/Header/Header';

// estilo Sass para o componente
import './App.style.scss';

/**
 * Este componente é responsável por iniciar a aplicação App
 */

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
