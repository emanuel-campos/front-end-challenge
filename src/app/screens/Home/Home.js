import React, { Component } from 'react';
import Header from '@/app/components/containers/Header/Header';
import Showcase from './components/containers/Showcase/Showcase';

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
      </div>
    );
  }
}

export default Home;
