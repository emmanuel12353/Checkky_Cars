import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './filter.css';
import Car1 from '../../Pics/Rectangle653.png';
import Speed from '../../Pics/icon/speed.png';
import Petrol from '../../Pics/icon/petrol.png';
import Manual from '../../Pics/icon/manual.png';
import Wifi from '../../Pics/icon/wifi.png';

const Data = [{
  "id": 1,
  "carModel": "Savana 3500",
  "carModelYear": 1998
}, {
  "id": 2,
  "carModel": "Endeavor",
  "carModelYear": 2007
}, {
  "id": 3,
  "carModel": "Savana",
  "carModelYear": 2011
},
{
  "id": 3,
  "carModel": "Savana",
  "carModelYear": 2011
},
]
function Main() {
  return (
    <div class="container Main">
<div class="">
{Data.map((item, index) =>
  <div class="shadow mb-5 tin">
      <Row className=''>
      <Col lg={4} md={6} sm={6} xs={6}>
   
    <img src={Car1} alt='' className='fitimg' />
    </Col>
    <Col lg={6} md={5} sm={5} xs={5}>
    <div className='filtmain'>
    {item.carModel}
       </div>
       <ul className='tag1 mt-2'>

       <li className='tag'>
       <img src={Speed} alt='' className='mainimgi'/>
<p className='paragr'>2000</p>
</li>

<li className='tag'>
<img src={Petrol} alt='' className='mainimgi'/>
<p className='paragr'>petrol</p>
</li>
<li className='tag'>
<img src={Manual} alt='' className='mainimgi'/>
<p className='paragr'>manual</p>
</li>

       </ul>
       <ul className='tag1'>

<li className='tag'>
<img src={Wifi} alt='' className='mainimgi'/>
<p className='paragr'>wifi</p>
</li>

<li className='tag'>
<i class="bi bi-speedometer2"></i>
<p className='paragr'>4</p>
</li>


</ul>
    </Col>
    
 
  </Row>
 </div>
)
}
</div>
</div>

             
  );
}

export default Main;
