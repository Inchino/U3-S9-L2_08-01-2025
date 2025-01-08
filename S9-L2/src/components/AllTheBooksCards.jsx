import { Card, Col, Row } from 'react-bootstrap';
import libreria from '../../data/books/fantasy.json';

const AllTheBooksCards = () => {
  return (
    <Row className="justify-content-evenly" >
      <h3 className='text-light text-center'>Libreria Fantasy</h3>
      {libreria.map((libro) => {
        return (
          <Col xs={12} md={3} key={libro.asin}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={libro.img}/>
      <Card.Body>
        <Card.Title>{libro.title}</Card.Title>
        <Card.Text>
          <p>{libro.category}</p>
          <p>{libro.price}€</p>
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooksCards;