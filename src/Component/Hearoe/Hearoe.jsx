import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hearoe.css';
import img2 from '../../Pics/image1.png';

function Hearoe() {
  return (
    <div>
    <div className="container hearo">
    <Container>
      
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className='hearp'>
        <p className="display-5 fw-bold lh-1 mb-3 hearoe">RENT A CAR</p>
        <p className="display-5 fw-bold lh-1 hearoe">WITHOUT STRESS</p>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
        minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
        </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
        <img src={img2} className="img-fluid" alt="Bootstrap Themes" />
        </Col>
        
      </Row>
    </Container>
    </div>
  </div>
       
  );
}

export default Hearoe;
