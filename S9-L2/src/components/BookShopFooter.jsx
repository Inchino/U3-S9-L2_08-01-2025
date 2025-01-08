import { Container } from 'react-bootstrap'

const BookShopFooter = function(){
    return (
        <>
        <Container fluid={true} className='bg-dark'>
            <h4 className='text-center text-white pt-4'>CONTATTI:</h4>
            <p className='text-center text-white'>+39 333 3456789</p>
            <p className='text-center text-white'>LeggiSottolOonda@gmail.com</p>
            <h4 className='text-center text-white'>DOVE TROVARCI:</h4>
            <p className='text-center text-white pb-4'>Via del Mare 20</p>
        </Container>
        </>
    )
}

export default BookShopFooter;