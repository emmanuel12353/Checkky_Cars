import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import top8 from '../../Pics/filter.png'; 
import './Searchbar.css';
import {Link} from 'react-router-dom';

function Searchbar() {
  return (
    <div>
       <Container className='mt-5'>
       <div className='search'>
        <p className='searchp'>Quick Search</p>
      <Row className=''>
        <Col lg={2} md={6} sm={6} xs={6}>
        <input type="text" className='but2' placeholder='zip code'/>
        </Col>
        <Col lg={2} md={6} sm={6} xs={6}>
        <input type="text" className='but2' placeholder='minter mile radius'/>
          </Col>
        <Col lg={2} md={6} sm={6} xs={6}>
        <input type="text" className='but2' placeholder='select pickup date'/>
        </Col>
        <Col lg={2} md={6} sm={6} xs={6}>
        <input type="text" className='but2' placeholder='select dropoff date'/>
        </Col>
        <Col lg={1} md={6} sm={6} xs={6} className='colsubmit'>
        <Link to="/Filter">
        <Button className='submit1'>filter</Button>
        </Link>
        </Col>
        <Col lg={1} md={6} sm={6} xs={6} className='colsubmit2'>
        <img src={top8} alt='' width='40' />
        </Col>
        <Col lg={3} md={6} sm={6} xs={6}>
        <Link to="/Search">
        <Button className='submit'>submit</Button>
        </Link>
        </Col>
      
      </Row>
      </div>
    </Container>
</div>


  );
}

export default Searchbar;
