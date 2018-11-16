import React, { Component } from 'react';
import PropTypes from 'prop-types';

// estilo Sass para o componente
import './VideoBackground.style.scss';

/**
 * Este componente cria um background responsivo
 * a partir de uma url embed e da altura e largura
 * proporcinal do video.
 */

class VideoBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  // calcula a largura e altura correta para exibir o video
  handleResize() {
    const widthVideo = this.props.width;
    const heightVideo = this.props.height;
    const elementContainer = document.getElementById('videobackground-container');

    // verifica se existe o elemento
    if (elementContainer) {
      const widthContainer = elementContainer.offsetWidth;
      const heightContainer = elementContainer.offsetHeight;

      this.setState({
        width: widthContainer,
        height: ((widthContainer * heightVideo) / widthVideo),
      });

      if (((widthContainer * heightVideo) / widthVideo) < heightContainer) {
        this.setState({
          width: ((heightContainer * widthVideo) / heightVideo),
          height: heightContainer,
        });
      }
    }
  }

  render() {
    return (
      <div className="videobackground" id="videobackground-container">
        <div
          className="videobackground-wrapper"
          style={{ width: this.state.width, height: this.state.height }}
        >
          <iframe className="videobackground-frame" src={this.props.video} title="Video" frameBorder="0" />
        </div>
      </div>
    );
  }
}

VideoBackground.propTypes = {
  video: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default VideoBackground;
