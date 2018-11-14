import React, { Component } from 'react';

import Header from '@/app/components/containers/Header/Header';
import Footer from '@/app/components/containers/Footer/Footer';
import Showcase from './components/containers/Showcase/Showcase';
import Calls from './components/containers/Calls/Calls';
import Versions from './components/containers/Versions/Versions';
import Cars from './components/containers/Cars/Cars';

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
        <Versions />
        <Cars />
        <Footer />
      </div>
    );
  }
}

export default Home;
