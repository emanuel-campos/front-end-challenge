import React, { Component } from 'react';
import Header from '@/app/components/containers/Header/Header';
import Showcase from './components/containers/Showcase/Showcase';
import Calls from './components/containers/Calls/Calls';

/**
 * Este componente é responsável por entregar
 * a "screen" com a estrutura da Home
 */

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Showcase />
        <Calls />
      </div>
    );
  }
}

export default Home;
