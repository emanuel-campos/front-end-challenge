import React, { Component } from 'react';
import PropTypes from 'prop-types';

// estilo Sass para o componente
import './FacebookShare.style.scss';

/**
 * O objetivo deste componente é mostrar um botão
 * de share do Facebook com base na URL passada nas props.
 *
 * Esse componente pode ser melhorado, por exemplo, implementando
 * os outros atributos disponíveis na API do Facebook,
 * recebendo-os pelas props. Por enquando não é necessário.
 */

class FacebookShare extends Component {
  render() {
    return (
      <iframe
        className="facebookshare"
        title="Compartilhar"
        src={`https://www.facebook.com/plugins/share_button.php?href=${this.props.url}&layout=button_count&size=small&mobile_iframe=true&width=${this.props.width}&height=${this.props.height}&appId`}
        width={this.props.width}
        height={this.props.height}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    );
  }
}

FacebookShare.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default FacebookShare;
