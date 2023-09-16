import { Container, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>ÓPTICA CARACAS 2020</h1>
          <p className='text-center mb-4'>
            Optica Caracas 20/20
            👓 Monturas para que tu visión sea 20/20
            👁️ Examen de la vista y cristales
            👀consultas oftalmológicas
            🕶️ Lentes de Sol
            ☎️ 0212-7619096
            📲 0412-7329701

          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
