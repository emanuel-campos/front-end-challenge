import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import FacebookLike from '@/app/components/presentation/FacebookLike/FacebookLike';
import FacebookShare from '@/app/components/presentation/FacebookShare/FacebookShare';
import SimulateFinancing from '../../presentation/SimulateFinancing/SimulateFinancing';

// mock de dados usados no container Showcase
import {
  MockVersions,
  MockInstallments,
} from './Showcase.data';

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
        <div className="showcase-areavideo">
          <div className="showcase-areavideo-player">
            <iframe className="showcase-areavideo-frame" src="https://player.vimeo.com/video/125018656?background=1" title="Video" frameBorder="0" />
          </div>
        </div>
        <div className="showcase-pelicula" />
        <div className="showcase-wrapper">
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <div className="showcase-simulatefinancing" id="showcase-simulatefinancing">
                  <SimulateFinancing
                    title="Simular Financiamento"
                    description="Escolha a parcela que cabe no seu bolso."
                    versions={MockVersions}
                    installments={MockInstallments}
                  />
                </div>
              </Col>
              <Col xs={12} md={8}>
                <div className="showcase-content">
                  <div className="showcase-header">
                    <h2 className="showcase-title">
                      Etios Hatch 2017
                      <small>X 1.3 Manual</small>
                    </h2>
                    <h3 className="showcase-subtitle">Você tem mais para descobrir.</h3>
                  </div>

                  <div className="showcase-price">
                    <div className="showcase-price-old">
                      de <strike>R$ 44.120,00</strike>
                    </div>
                    <div className="showcase-price-new">
                      por <span className="showcase-price-number">R$ 40.987,00</span>
                    </div>
                    <div className="showcase-price-condicoes">
                      *Consulte as Condições Comerciais.
                    </div>
                  </div>

                  <div className="showcase-footer">
                    <div className="showcase-social">
                      <div className="showcase-social-title">Gostou? Então Compartilhe.</div>
                      <ul className="showcase-social-buttonlist">
                        <li className="showcase-social-buttonitem">
                          <FacebookLike
                            url="https://www.facebook.com/ToyotaGrandMotors/"
                            width="82"
                            height="20"
                          />
                        </li>
                        <li className="showcase-social-buttonitem">
                          <FacebookShare
                            url="https://www.facebook.com/ToyotaGrandMotors/"
                            width="120"
                            height="20"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="showcase-note">
                      *Imagens meramente ilustrativas. Alguns itens apresentados poderão não
                      estar disponíveis nas versoes. Preços sugeridos e válidos até 31/07/2015.
                      Os preços poderão ser modificadas sem aviso prévio.
                      Consulte e confirme todas as informações com um de nossos vendedores.
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Showcase;
