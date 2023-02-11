import React from 'react';
import Filter from '../../Component/Side/filter';
import Navbar from '../../Component/Navbar/Navbar';

import Searchbar from '../../Component/Search/Searchbar';


export default function FilterPage() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Filter />
    </div>
  );
}

