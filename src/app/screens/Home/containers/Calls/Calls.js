import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import CallsItem from '../../presentations/CallsItem/CallsItem';

// mock de dados usados no container Calls
import MockCalls from './Calls.data';

// estilo Sass para o componente
import './Calls.style.scss';

/**
 * Calls é um componente do tipo container
 * que carrega um conjunto de chamadas.
 */

class Calls extends Component {
  render() {
    return (
      <div className="calls">
        <Grid>
          <Row>
            {MockCalls.map((call, index) => (
              <Col className="calls-item" xs={12} sm={4} key={index.toString()}>
                <CallsItem
                  title={call.title}
                  subtitle={call.subtitle}
                  description={call.description}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Calls;
