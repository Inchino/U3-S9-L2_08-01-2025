import { Carousel, Container, Row, Col } from 'react-bootstrap';
import libreria from '../../data/books/fantasy.json';
import { Component } from 'react';

class AllTheBooks extends Component {
  state = {
    activeLibro: libreria[0], 
  }

  render() {
    return (
      <Container>
        <h3 className='text-light text-center'>Fantasy</h3>
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
                      <p className='text-danger h1 bg-dark w-25'>{libro.price}€</p>
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