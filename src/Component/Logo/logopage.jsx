import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './logopage.css';
import D1 from '../../Pics/d1.png';
import D2 from '../../Pics/d2.png';
import D3 from '../../Pics/d3.png';
import D4 from '../../Pics/d4.png';
import D5 from '../../Pics/d5.png';
import D6 from '../../Pics/d6.png';
import D7 from '../../Pics/d7.png';

function Logopage() {
  return (
    <div className='container'>
      
      <div className='logop '>
        Connecting To The Biggest Brands In <br />
        Car Rentals
        </div>
        <Container className='mt-5 pik'>
      
      <Row>
        <Col lg={2} md={3} sm={4} xs={4}><img src={D1} alt="" className="img1" height='70px' /></Col>
        <Col lg={2} md={3} sm={4} xs={4}><img src={D2} alt="" className="img1" height='70px' /></Col>
        <Col lg={2} md={3} sm={4} xs={4}><img src={D3} alt="" className="img1" height='70px'  /></Col>
        <Col lg={2} md={3} sm={4} xs={4}><img src={D7} alt="" className="img1" height='70px'  /></Col>
        <Col lg={2} md={3} sm={4} xs={4}><img src={D4} alt="" className="img1" height='70px'  /></Col>
        <Col lg={2} md={3} sm={4} xs={4}><img src={D5} alt="" className="img1" height='70px'  /></Col>
      
      </Row>
    </Container>
    </div>
  );
}

export default Logopage;
