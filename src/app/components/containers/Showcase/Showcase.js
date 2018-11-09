import React, { Component } from 'react';

// estilo Sass para o componente
import './Showcase.style.scss';

/**
 * Showcase é um componente do tipo container
 * que funciona como a vitrine, nela temos um video
 * rodando por baixo de uma pelicula pontilhada e
 * e uma chamada em texto.
 */

class Showcase extends Component {
  render() {
    return (
      <div className="showcase"></div>
    );
  }
}

export default Showcase;
