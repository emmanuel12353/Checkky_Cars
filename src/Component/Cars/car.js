import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img7 from '../../Pics/Rectangle653.png';
import img8 from '../../Pics/d1.png';

import './cargrid.css'


const dataCollection = [{
    "id": 1,
    "car": "Lexus",
    "logo": "img8",
  }, {
    "id": 2,
    "car": "Mitsubishi",
    "img": "img8"
  }, {
    "id": 3,
    "car": "Mercedes-Benz",
    "img": "img8"
  }, {
    "id": 4,
    "car": "GMC",
    "img": "img8"
  }, {
    "id": 5,
    "car": "Audi",
    "img": "img8"
  }, {
    "id": 6,
    "car": "Volkswagen",
    "img": "img8"
  }]

function Car() {
  return (
    <div>
      
         <div className='logop'>
       TOP OFFER FOR YOU
        </div>
     <div class="box">
     <Container>
      <Row>
 {dataCollection.map((item, index) =>
<Col lg={4} md={4} sm={4} xs={4}>
<div class="card box-part mb-3">
    <div class="buttons">
      <img src={item.logo} width='30px' alt='' />
    </div>
    
        <div class="movie-place">
            <div className='item'>{item.car}</div>
        </div>
    </div>

</Col>
  )
}

         </Row>
    </Container>
                </div>	
                
			<button class="btn butn"> See More</button> 
    </div>
  );
}

export default Car;
