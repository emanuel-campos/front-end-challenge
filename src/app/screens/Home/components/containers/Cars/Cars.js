import React, { Component } from 'react';
import Carousel from 'react-slick';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

// mock de dados usados no container Cars
import MockCars from './Cars.data';

// estilo Sass para o componente
import './Cars.style.scss';

/**
 * Cars é um componente do tipo container
 * que carrega um conjunto de carros dentro de um carrossel.
 */

class Cars extends Component {
  render() {
    const settingsCarousel = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="cars">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <h2 className="cars-title">Conheça nossos carros</h2>

              {/* BEGIN carrossel */}
              <Carousel className="cars-carousel" {...settingsCarousel}>
                {MockCars.map((car, index) => (
                  <div className="cars-carousel-item" key={index.toString()}>
                    <img className="cars-carousel-item-photo" src={car.photo} alt={car.title} />
                    <h3 className="cars-carousel-item-title">{car.title}</h3>
                  </div>
                ))}
              </Carousel>
              {/* END carrossel */}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Cars;
