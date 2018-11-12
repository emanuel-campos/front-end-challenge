import React, { Component } from 'react';
import PropTypes from 'prop-types';

// estilo Sass para o componente
import './CallsItem.style.scss';

/**
 * Este componente é a estrutura e estilo
 * individual das chamadas.
 */

class CallsItem extends Component {
  render() {
    return (
      <div className="callsitem">
        <h2 className="callsitem-title">
          {this.props.title}

          <span className="callsitem-subtitle">
            {this.props.subtitle}
          </span>
        </h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

CallsItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CallsItem;
