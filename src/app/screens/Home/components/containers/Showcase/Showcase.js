import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

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
      <div className="showcase">
        <div className="showcase-wrapper">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={4}>
                teste menu
              </Col>
              <Col xs={12} md={8}>
                teste conteudo
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Showcase;
