import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const BookShopWelcome = function () {
    const [show, setShow] = useState(true);
    return (
        <>
        <Container fluid={true} className='bg-primary pb-4'>
            <h1 className='text-white pt-5'>BENVENUTO NELLA NOSTRA LIBRERIA</h1>
            <h2 className='text-white pb-5'>Rilassati leggendo sotto la brezza marina</h2>
        <Alert show={show} variant="success">
        <Alert.Heading>SCONTO DI BENVENUTO!</Alert.Heading>
        <p>
          Hai uno sconto del 10% sul tuo primo acquisto e la spedizione gratuita se superi i 50 euro di spesa, usa il codice sconto FIRST10 al checkout!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert> 

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </Container>
        </>
    )
  }
  
  export default BookShopWelcome;