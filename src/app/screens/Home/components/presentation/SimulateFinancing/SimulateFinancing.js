import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Radio,
  Button,
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

// estilo Sass para o componente
import './SimulateFinancing.style.scss';

// remove o estilo padrão para o componente "Button" do Bootstrap
bootstrapUtils.addStyle(Button, 'simulatefinancing');

/**
 * O objetivo deste componente é isolar a estrutura do
 * formulario que simula o financiamento.
 *
 * Existe um estilo padrão, mas os detalhes são definidos
 * pelo container para evitar um design engessado.
 */

class SimulateFinancing extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      versao: '',
      nome: '',
      email: '',
      telefone: '',
      parcela: '',
      valorEntrada: '',
      receberOfertas: '',
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="simulatefinancing">

        {/* BEGIN header */}
        {this.props.showHeader && (
          <div className="simulatefinancing-header">

            <h2 className="simulatefinancing-title">
              {this.props.title}
            </h2>

            <span className="simulatefinancing-description">
              {this.props.description}
            </span>

            <div className="simulatefinancing-separator" />
          </div>
        )}
        {/* END header */}

        <form>
          <FormGroup>
            <ControlLabel className="simulatefinancing-label">Escolha uma versão</ControlLabel>

            {/* BEGIN input versao */}
            <FormControl
              componentClass="select"
              name="versao"
              value={this.state.versao}
              onChange={this.handleChange}
              className="simulatefinancing-input"
            >
              <option value="1.8">1.8</option>
              <option value="2.0">2.0</option>
            </FormControl>
            {/* END input versao */}

          </FormGroup>

          <div className="simulatefinancing-separator" />

          <FormGroup>

            {/* BEGIN input nome */}
            <FormControl
              className="simulatefinancing-input"
              type="text"
              name="nome"
              value={this.state.nome}
              placeholder="Nome*"
              onChange={this.handleChange}
            />
            {/* END input versao */}

          </FormGroup>

          <FormGroup>

            {/* BEGIN input email */}
            <FormControl
              className="simulatefinancing-input"
              type="text"
              name="email"
              value={this.state.email}
              placeholder="E-mail*"
              onChange={this.handleChange}
            />
            {/* END input email */}

          </FormGroup>

          <FormGroup>

            {/* BEGIN input telefone */}
            <FormControl
              className="simulatefinancing-input"
              type="text"
              name="telefone"
              value={this.state.telefone}
              placeholder="Telefone*"
              onChange={this.handleChange}
            />
            {/* END input telefone */}

          </FormGroup>

          {/* BEGIN group parcelas */}
          <FormGroup>
            <ControlLabel className="simulatefinancing-label">Número de parcelas*</ControlLabel>
            <div>
              <Radio
                name="parcela"
                value="12"
                onChange={this.handleChange}
                checked={this.state.parcela === '12'}
                inline
              >
                12
              </Radio>{' '}
              <Radio
                name="parcela"
                value="24"
                onChange={this.handleChange}
                checked={this.state.parcela === '24'}
                inline
              >
                24
              </Radio>{' '}
              <Radio
                name="parcela"
                value="36"
                onChange={this.handleChange}
                checked={this.state.parcela === '36'}
                inline
              >
                36
              </Radio>{' '}
              <Radio
                name="parcela"
                value="48"
                onChange={this.handleChange}
                checked={this.state.parcela === '48'}
                inline
              >
                48
              </Radio>
            </div>
          </FormGroup>
          {/* END group parcelas */}

          <FormGroup>

            {/* BEGIN input valor da entrada */}
            <FormControl
              className="simulatefinancing-input"
              type="text"
              name="valorEntrada"
              value={this.state.valorEntrada}
              placeholder="Valor da entrada*"
              onChange={this.handleChange}
            />
            {/* END input valor da entrada */}

          </FormGroup>

          <FormGroup>

            {/* BEGIN check ofertas */}
            <Checkbox
              className="simulatefinancing-boxofertas"
              name="receberOfertas"
              value={this.state.receberOfertas}
              onChange={this.handleChange}
              inline
            >
              Desejo receber ofertas exclusivas da PG Prime.
            </Checkbox>
            {/* END check ofertas */}

          </FormGroup>

          <Button className="simulatefinancing-submit" bsStyle="simulatefinancing" type="submit">Simular Financiamento</Button>
          <Button className="simulatefinancing-link" bsStyle="link">Politica de Privacidade</Button>
        </form>
      </div>
    );
  }
}

SimulateFinancing.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showHeader: PropTypes.bool,
};

SimulateFinancing.defaultProps = {
  showHeader: true,
};

export default SimulateFinancing;
