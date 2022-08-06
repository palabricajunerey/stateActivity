import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react'

const ExerciseSix = () => {
    document.title = '#6';


    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    const submitValue = () => {
        const frmdetails = {
            'First Name' : fName,
            'Last Name' : lName
        }
        alert("Hello "+frmdetails['First Name']+" "+frmdetails['Last Name']+"!");
    }

    return (
        <Container>            
            <Row className='justify-content-center mt-5'>
            <h1>Exercise #6</h1>
                <Col md={4} className="shadow mt-3 p-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="First name" onChange={e => setfName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Last name" onChange={e => setlName(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={submitValue}>
                            GREET ME
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ExerciseSix;