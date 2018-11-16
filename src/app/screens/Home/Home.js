import React, { Component } from 'react';

import Header from '@/app/containers/Header/Header';
import Footer from '@/app/containers/Footer/Footer';
import Showcase from './containers/Showcase/Showcase';
import Calls from './containers/Calls/Calls';
import Versions from './containers/Versions/Versions';
import Cars from './containers/Cars/Cars';

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
