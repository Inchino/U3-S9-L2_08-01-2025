import { Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap';
import libreria from '../../data/books/fantasy.json';
import { Component } from 'react';

class AllTheBooks extends Component {
  state = {
    activeLibro: libreria[0], 
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Carousel
              onSlide={(i) => {
                console.log('SLIDE CAMBIATA!', i)
                this.setState({
                  activeLibro: libreria[i],
                })
              }}
            >
              {libreria.map((libro) => {
                return (
                  <Carousel.Item key={libro.asin}>
                    <img src={libro.img} className="w-100"/>
                    <Carousel.Caption>
                      <h3>{libro.title}</h3>
                      <p>{libro.category}</p>
                      <p>{libro.price}euro</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks;