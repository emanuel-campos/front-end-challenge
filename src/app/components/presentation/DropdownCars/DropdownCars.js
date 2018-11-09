import React, { Component } from 'react';
import {
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

// estilo Sass para o componente
import './DropdownCars.style.scss';

/**
 * O objetivo deste componente é criar uma versão
 * personalizada do padrão Dropdown do bootstrap.
 */

class DropdownCars extends Component {
  render() {
    return (
      <NavDropdown
        className="dropdowncars"
        title={this.props.title}
        id={this.props.id}
      >
        {this.props.items.map(item => (
          <MenuItem className="dropdowncars-item">
            <span className="dropdowncars-item-titulo">{item.name}</span>
            <img className="dropdowncars-item-icone" src={item.icon} alt={item.name} />
          </MenuItem>
        ))}
      </NavDropdown>
    );
  }
}

DropdownCars.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
  })).isRequired,
};

export default DropdownCars;
