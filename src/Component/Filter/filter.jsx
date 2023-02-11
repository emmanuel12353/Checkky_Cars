import React from 'react';

import './filter.css';
import Side from './side';
import Main from './main';

function Filter() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-3'>
        <Side />
        </div>
        <div className='col-lg-9'>  
     <Main />
        </div>
      </div>

     </div>
  );
}

export default Filter;
