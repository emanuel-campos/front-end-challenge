import React, { Component } from 'react';
import PropTypes from 'prop-types';

// estilo Sass para o componente
import './ScrollTags.style.scss';

/**
 * Este componente é uma lista de tags que são
 * carregadas em uma "caixa" com scroll vertical
 */

class ScrollTags extends Component {
  render() {
    return (
      <div className="scrolltags">
        <div className="scrolltags-wrapper">
          <ul className="scrolltags-list">
            {this.props.tags.map((tag, index) => (
              <li className="scrolltags-list-item" key={index.toString()}>
                <span className="scrolltags-tag">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ScrollTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ScrollTags;
