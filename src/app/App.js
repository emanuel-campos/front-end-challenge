import React, { Component } from 'react';

// estilo Sass para o componente
import 'font-awesome/scss/font-awesome.scss';
import './App.style.scss';

import Home from './screens/Home/Home';

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
