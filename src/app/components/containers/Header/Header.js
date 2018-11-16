import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

// estilo Sass para o componente
import './Header.style.scss';

// componentes "presentations"
import DropdownCars from '../../presentations/DropdownCars/DropdownCars';
import DropdownPhones from '../../presentations/DropdownPhones/DropdownPhones';

// mock de dados usados no container Header
import {
  MockCars,
  MockPhones,
  LogoGrandMotors,
  LogoToyota,
} from './Header.data';

// remove o estilo padrão para o componente Navbar do Bootstrap
bootstrapUtils.addStyle(Navbar, 'no-style');

/**
 * Header é o componente do tipo container
 * que funciona como o cabeçalho da aplicação
 */

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerFixedScroll: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({
      headerFixedScroll: (window.scrollY > 50),
    });
  }

  render() {
    return (
      <div
        className={`header ${(this.state.headerFixedScroll ? 'header-scroll' : '')}`}
      >
        <Navbar
          className="header-navbar"
          bsStyle="no-style"
          fixedTop
          collapseOnSelect
        >

          {/* BEGIN header brand */}
          <Navbar.Header>
            <Navbar.Brand className="header-navbar-brand">
              <a href="#home">
                <img alt="Grand Motors" src={LogoGrandMotors} />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle className="header-togglemenu" />
          </Navbar.Header>
          {/* END header brand */}

          <Navbar.Collapse>
            {/* BEGIN header menu */}
            <Nav className="header-menuprincipal header-nav">
              <DropdownCars
                title="Nossos Veículos"
                id="nossos-veiculos-dropdown"
                items={MockCars}
              />
              <NavItem eventKey={2} href="#">
                Serviços
              </NavItem>
              <NavDropdown title="Vendas Diretas" id="vendas-diretas-dropdown">
                <MenuItem className="header-menuprincipal-link header-nav-link">Empresas</MenuItem>
                <MenuItem className="header-menuprincipal-link header-nav-link">Frotistas</MenuItem>
                <MenuItem className="header-menuprincipal-link header-nav-link">Governo</MenuItem>
                <MenuItem className="header-menuprincipal-link header-nav-link">PCD</MenuItem>
                <MenuItem className="header-menuprincipal-link header-nav-link">Produtor Rural</MenuItem>
                <MenuItem className="header-menuprincipal-link header-nav-link">Taxista</MenuItem>
              </NavDropdown>
            </Nav>
            {/* END header menu */}

            {/* BEGIN menu phones */}
            <Nav className="header-menuphones header-nav">
              <DropdownPhones
                title="Telefones"
                id="telefones-dropdown"
                places={MockPhones}
              />
            </Nav>
            {/* END menu phones */}

            <div className="header-nav header-nav-brandup pull-right hidden-xs hidden-sm">
              <Navbar.Link href="#">
                <img alt="Toyota" src={LogoToyota} />
              </Navbar.Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
