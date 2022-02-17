import {Link} from 'react-router-dom';
import '../App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import {Container,Row,Col} from 'react-bootstrap';

export default function Review(){
    return(
        <div className='left'>
            <Container>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'start'}}>
                        <Link to='/page/extra'>
                            <Button variant='warning'> Back </Button>
                        </Link>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant='primary'> Export JSON </Button>
                    </Col>
                    <Col style={{display: 'flex', justifyContent: 'end'}}>
                        <Button variant='success'> Download PDF </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}