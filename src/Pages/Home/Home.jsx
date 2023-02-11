import React from 'react';
import Cargrid from '../../Component/Cars/cargrid';
import ContactUs from '../../Component/Contact/contact_us';

import Faqs from '../../Component/FAQ/faqs';


import Hearoe from '../../Component/Hearoe/Hearoe';
import Logopage from '../../Component/Logo/logopage';
import Navbar from '../../Component/Navbar/Navbar';
import Searchbar from '../../Component/Search/Searchbar';
import Top from '../../Component/Topofer/top';

function Home() {
  return (
    <div>
      <Navbar />
      <Hearoe />
      <Searchbar />
      <Logopage />
      <Cargrid />
      <Top />
      <Faqs />
      <ContactUs />
  
    </div>
  );
}

export default Home;