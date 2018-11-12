import React, { Component } from 'react';
import {
  NavDropdown,
  PanelGroup,
  Panel,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

// estilo Sass para o componente
import './DropdownPhones.style.scss';

// remove o estilo padrão para o componente "Panel" do Bootstrap
bootstrapUtils.addStyle(Panel, 'dropdownphones');

/**
 * O objetivo deste componente é criar uma versão
 * personalizada do padrão NavDropdown do bootstrap
 * para listar os telefones no menu.
 */

class DropdownPhones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  dropdownToggle(status) {
    this.setState({ menuOpen: status });
  }

  render() {
    return (
      <NavDropdown
        className="dropdownphones"
        id={this.props.id}
        open={this.state.menuOpen}
        onToggle={val => this.dropdownToggle(val)}
        title={
          <span>
            <FontAwesome className="dropdownphones-icon" name="phone" />
            {this.props.title}
          </span>
        }
      >
        <PanelGroup
          accordion
          id="dropdownphones-wrapper"
          className="dropdownphones-wrapper"
        >

          {/* BEGIN place item */}
          {this.props.places.map((place, index) => (
            <Panel bsStyle="dropdownphones" eventKey={index}>
              <Panel.Heading>
                <Panel.Title
                  onClick={() => this.dropdownToggle(true)}
                  toggle
                >
                  <span className="dropdownphones-title">
                    <FontAwesome
                      name="angle-up"
                      className="dropdownphones-title-icon pull-right"
                    />
                    {place.name}
                  </span>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body className="dropdownphones-content" collapsible>
                <ul className="dropdownphones-list">

                  {/* BEGIN phone item */}
                  {place.phones.map(phone => (
                    <li className="dropdownphones-item">
                      <strong className="dropdownphones-fullnumber">
                        <span className="dropdownphones-areacode">({phone.areaCode})</span>
                        <span className="dropdownphones-number">{phone.number}</span>
                      </strong>
                      <span className="dropdownphones-separator">|</span>
                      <span className="dropdownphones-type">{phone.type}</span>
                    </li>
                  ))}
                  {/* END phone item */}

                </ul>
              </Panel.Body>
            </Panel>
          ))}
          {/* END place item */}

        </PanelGroup>
      </NavDropdown>
    );
  }
}

DropdownPhones.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    phones: PropTypes.arrayOf(PropTypes.shape({
      areaCode: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default DropdownPhones;
