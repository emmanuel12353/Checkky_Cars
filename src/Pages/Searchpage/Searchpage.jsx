import React from 'react';
import Filter from '../../Component/Filter/filter';
import Navbar from '../../Component/Navbar/Navbar';

import Searchbar from '../../Component/Search/Searchbar';


function Searchpage() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Filter />
    </div>
  );
}

export default Searchpage;
