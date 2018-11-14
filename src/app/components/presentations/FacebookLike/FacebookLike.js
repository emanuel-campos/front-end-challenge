import React, { Component } from 'react';
import PropTypes from 'prop-types';

// estilo Sass para o componente
import './FacebookLike.style.scss';

/**
 * O objetivo deste componente é mostrar um botão
 * de like do Facebook com base na URL passada nas props.
 *
 * Esse componente pode ser melhorado, por exemplo, implementando
 * os outros atributos disponíveis na API do Facebook,
 * recebendo-os pelas props. Por enquando não é necessário.
 */

class FacebookLike extends Component {
  render() {
    return (
      <iframe
        className="facebooklike"
        title="Curtir"
        src={`https://www.facebook.com/plugins/like.php?href=${this.props.url}&width=${this.props.width}&layout=button_count&action=like&size=small&show_faces=false&share=false&height=${this.props.height}&appId`}
        width={this.props.width}
        height={this.props.height}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"
      />
    );
  }
}

FacebookLike.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default FacebookLike;
