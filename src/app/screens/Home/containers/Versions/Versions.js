import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Tab,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

import ScrollTable from '../../presentations/ScrollTable/ScrollTable';
import ScrollTags from '../../presentations/ScrollTags/ScrollTags';

// mock de dados usados no container Versions
import MockVersions from './Versions.data';

// estilo Sass para o componente
import './Versions.style.scss';

// remove o estilo padrão para o componente Nav do Bootstrap
bootstrapUtils.addStyle(Nav, 'no-style');

/**
 * Versions é um componente do tipo container que carrega
 * as versões dos carros recebidas no MockVersions e
 * distribui em abas.
 */

class Versions extends Component {
  render() {
    return (
      <div className="versions">
        <Grid>
          <Tab.Container id="versions-container" defaultActiveKey={0}>
            <Row className="clearfix">
              <Col xs={12} md={3}>
                <div className="versions-sidebar">
                  <h3 className="versions-title versions-sidebar-title">Versões</h3>

                  {/* BEGIN sidebar abas */}
                  <Nav bsStyle="no-style" stacked>
                    {MockVersions.map((version, index) => (
                      <NavItem className="versions-sidebar-item" eventKey={index} key={index.toString()}>
                        {version.name}
                      </NavItem>
                    ))}
                  </Nav>
                  {/* END sidebar abas */}

                </div>
              </Col>
              <Col xs={12} md={9}>
                <Tab.Content animation>
                  {MockVersions.map((version, indexVersion) => (
                    <Tab.Pane eventKey={indexVersion} key={indexVersion.toString()}>
                      <Row>
                        <Col xs={12} sm={7}>

                          {/* BEGIN foto destaque */}
                          <div className="versions-featuredphoto">
                            <img src={version.photo} alt={version.name} />
                          </div>
                          {/* END foto destaque */}

                        </Col>
                        <Col xs={12} sm={5}>

                          {/* BEGIN tabela com scroll */}
                          <div className="versions-scrolltable">
                            <h3 className="versions-title">Informações Gerais</h3>

                            <ScrollTable rows={version.informations} height="250px" />
                          </div>
                          {/* END tabela com scroll */}

                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <h3 className="versions-title versions-tag-title">Itens de Série</h3>

                          {/* BEGIN tags com scroll horizontal */}
                          <ScrollTags tags={version.tags} />
                          {/* END tags com scroll horizontal */}

                        </Col>
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Grid>
      </div>
    );
  }
}

export default Versions;
