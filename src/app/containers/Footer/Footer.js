import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

// estilo Sass para o componente
import './Footer.style.scss';

// mock de dados usados no container Footer
import {
  LogoGrandMotors,
  AssinaturaAutoForce,
} from './Footer.data';

/**
 * Footer é o componente do tipo container
 * que funciona como o rodapé da aplicação
 */

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <div className="footer-logo">

                {/* BEGIN logo grand motors */}
                <img src={LogoGrandMotors} alt="Grand Motors" />
                {/* END logo grand motors */}

              </div>
            </Col>
            <Col xs={12} md={6}>
              © Copyright 2018 - Cliente - Todos os direitos reservados.

              {/* BEGIN menu rodape */}
              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="#link">
                    Visitar site
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="#link">
                    Contato
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="#link">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
              {/* END menu rodape */}

            </Col>
            <Col xs={12} md={3}>

              {/* BEGIN redes sociais */}
              <ul className="footer-social">
                <li className="footer-social-item">
                  <a href="#facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="facebook-f" className="footer-social-icon" />
                  </a>
                </li>
                <li className="footer-social-item">
                  <a href="#twitter" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="twitter" className="footer-social-icon" />
                  </a>
                </li>
                <li className="footer-social-item">
                  <a href="#google-plus" target="_blank" rel="noopener noreferrer">
                    <FontAwesome name="google-plus" className="footer-social-icon" />
                  </a>
                </li>
              </ul>
              {/* END redes sociais */}

            </Col>
          </Row>
          <Row>
            <Col md={12}>

              {/* BEGIN assinatura AutoForce */}
              <div className="footer-assinatura">
                <a title="AutoForce | Marketing Digital para Concessionárias" href="https://autoforce.com/" target="_blank" rel="noopener noreferrer">
                  <img className="footer-assinatura-logo" src={AssinaturaAutoForce} alt="Auto Force" />
                </a>
              </div>
              {/* END assinatura AutoForce */}

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
