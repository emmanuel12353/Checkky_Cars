import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img7 from '../../Pics/Rectangle653.png';
import img8 from '../../Pics/d1.png';
import D7 from '../../Pics/d7.png';
import D2 from '../../Pics/d2.png';
import D3 from '../../Pics/d3.png';
import D4 from '../../Pics/d4.png';
import D5 from '../../Pics/d5.png';
import D6 from '../../Pics/d6.png';

import './cargrid.css'


const dataCollection = [{
  "id": 1,
  "car": "Lexus"
}, {
  "id": 2,
  "car": "Mitsubishi"
}, {
  "id": 3,
  "car": "Mercedes-Benz"
}, {
  "id": 4,
  "car": "GMC"
}, {
  "id": 5,
  "car": "Audi"
}, {
  "id": 6,
  "car": "Volkswagen"
}]

function Cargrid() {
return (
  <div>
    
       <div className='logop'>
    Top Offer For You
      </div>
   <div class="box">
   <Container>
    <Row>
<Col lg={4} md={4} sm={4} xs={4}>
<div class="card box-part mb-3">
  <div class="buttons">
    <img src={img8} className='carimg' alt='' />
  </div>
  
      <div class="movie-place">
          <div className='item'>Lexus</div>
      </div>
  </div>

</Col>
<Col lg={4} md={4} sm={4} xs={4}>
<div class="card box-part mb-3">
  <div class="buttons">
    <img src={D2} className='carimg' alt='' />
  </div>
  
      <div class="movie-place">
          <div className='item'>Mitsubishi</div>
      </div>
  </div>

</Col>
<Col lg={4} md={4} sm={4} xs={4}>
<div class="card box-part mb-3">
  <div class="buttons">
    <img src={D3} className='carimg' alt='' />
  </div>
  
      <div class="movie-place">
          <div className='item'>Mercedes-Benz</div>
      </div>
  </div>

</Col>
<Col lg={4} md={4} sm={4} xs={4}>
<div class="card box-part mb-3">
  <div class="buttons">
    <img src={D4} className='carimg' alt='' />
  </div>
  
      <div class="movie-place">
          <div className='item'>GMC</div>
      </div>
  </div>

</Col>
<Col lg={4} md={4} sm={4} xs={4}>
<div class="card box-part mb-3">
  <div class="buttons">
    <img src={D5} className='carimg' alt='' />
  </div>
  
      <div class="movie-place">
          <div className='item'>Audi</div>
      </div>
  </div>

</Col>
<Col lg={4} md={4} sm={4} xs={4}>
<div class="card box-part mb-3">
  <div class="buttons">
    <img src={D6} className='carimg' alt='' />
  </div>
  
      <div class="movie-place">
          <div className='item'>Volkswagen</div>
      </div>
  </div>

</Col>

       </Row>
  </Container>
              </div>	
              
    <button class="btn butn"> See More</button> 
  </div>
);
}

export default Cargrid;
