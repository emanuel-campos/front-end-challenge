import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import FontAwesome from 'react-fontawesome';

// Estilo Sass para o componente
import 'font-awesome/scss/font-awesome.scss';
import './App.style.scss';

// Imagens usadas no componente
import LogoGrandMotors from '../../assets/images/logo-grand-motors.png';
import LogoToyota from '../../assets/images/logo-toyota.png';
import CarroEtiosHatch from '../../assets/images/etios-hatch.png';

// Removendo estilo padrão para o componente Navbar do Bootstrap
bootstrapUtils.addStyle(Navbar, 'no-style');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          className="App-Navbar"
          bsStyle="no-style"
          fixedTop
          collapseOnSelect
        >

          {/* BEGIN header brand */}
          <Navbar.Header>
            <Navbar.Brand className="App-Navbar-Brand">
              <a href="#home">
                <img alt="Grand Motors" src={LogoGrandMotors} />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          {/* END header brand */}

          <Navbar.Collapse>
            {/* BEGIN header menu */}
            <Nav className="App-MenuPrincipal App-Nav">
              <NavDropdown
                className="App-MenuPrincipal-Item App-Nav-Item App-MenuVeiculos"
                eventKey={1}
                title="Nossos Veículos"
                id="nossos-veiculos-dropdown"
              >
                <MenuItem className="App-MenuVeiculos-Item App-Nav-Link" eventKey={1.1}>
                  <span className="App-MenuVeiculos-Titulo">Etios Hatch 2017</span>
                  <img className="App-MenuVeiculos-Icone" src={CarroEtiosHatch} alt="Etios Hatch" />
                </MenuItem>
                <MenuItem className="App-MenuVeiculos-Item App-Nav-Link" eventKey={1.1}>
                  <span className="App-MenuVeiculos-Titulo">Etios Sedã 2017</span>
                  <img className="App-MenuVeiculos-Icone" src={CarroEtiosHatch} alt="Etios Hatch" />
                </MenuItem>
                <MenuItem className="App-MenuVeiculos-Item App-Nav-Link" eventKey={1.1}>
                  <span className="App-MenuVeiculos-Titulo">Etios Cross 2017</span>
                  <img className="App-MenuVeiculos-Icone" src={CarroEtiosHatch} alt="Etios Hatch" />
                </MenuItem>
                <MenuItem className="App-MenuVeiculos-Item App-Nav-Link" eventKey={1.1}>
                  <span className="App-MenuVeiculos-Titulo">Corolla 2016</span>
                  <img className="App-MenuVeiculos-Icone" src={CarroEtiosHatch} alt="Etios Hatch" />
                </MenuItem>
                <MenuItem className="App-MenuVeiculos-Item App-Nav-Link" eventKey={1.1}>
                  <span className="App-MenuVeiculos-Titulo">Etios Sedã 2017</span>
                  <img className="App-MenuVeiculos-Icone" src={CarroEtiosHatch} alt="Etios Hatch" />
                </MenuItem>
                <MenuItem className="App-MenuVeiculos-Item App-Nav-Link" eventKey={1.1}>
                  <span className="App-MenuVeiculos-Titulo">Etios Cross 2017</span>
                  <img className="App-MenuVeiculos-Icone" src={CarroEtiosHatch} alt="Etios Hatch" />
                </MenuItem>
                <MenuItem className="App-MenuVeiculos-Item App-Nav-Link" eventKey={1.1}>
                  <span className="App-MenuVeiculos-Titulo">Corolla 2016</span>
                  <img className="App-MenuVeiculos-Icone" src={CarroEtiosHatch} alt="Etios Hatch" />
                </MenuItem>
              </NavDropdown>
              <NavItem className="App-MenuPrincipal-Item App-Nav-Item" eventKey={2} href="#">
                Serviços
              </NavItem>
              <NavDropdown className="App-MenuPrincipal-Item App-Nav-Item" eventKey={3} title="Vendas Diretas" id="vendas-diretas-dropdown">
                <MenuItem className="App-MenuPrincipal-Link App-Nav-Link" eventKey={3.1}>Empresas</MenuItem>
                <MenuItem className="App-MenuPrincipal-Link App-Nav-Link" eventKey={3.2}>Frotistas</MenuItem>
                <MenuItem className="App-MenuPrincipal-Link App-Nav-Link" eventKey={3.3}>Governo</MenuItem>
                <MenuItem className="App-MenuPrincipal-Link App-Nav-Link" eventKey={3.4}>PCD</MenuItem>
                <MenuItem className="App-MenuPrincipal-Link App-Nav-Link" eventKey={3.5}>Produtor Rural</MenuItem>
                <MenuItem className="App-MenuPrincipal-Link App-Nav-Link" eventKey={3.6}>Taxista</MenuItem>
              </NavDropdown>
            </Nav>
            {/* END header menu */}

            {/* BEGIN menu phones */}
            <Nav className="App-MenuPhones App-Nav">
              <NavDropdown
                title={
                  <span>
                    <FontAwesome name="phone" />
                    Telefones
                  </span>
                }
                className="App-MenuPhones-Item"
                eventKey={1}
                id="telefones-dropdown"
              >
                <MenuItem eventKey={1.1}>Item 1</MenuItem>
              </NavDropdown>
            </Nav>
            {/* END menu phones */}

            <div className="App-Nav App-Nav-BrandUp" pullRight>
              <Navbar.Link href="#">
                <img alt="Toyota" src={LogoToyota} />
              </Navbar.Link>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <div className="App-content">t</div>
      </div>
    );
  }
}

export default App;
