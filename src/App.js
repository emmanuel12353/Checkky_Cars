import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Foot from './Component/Footer/foot';
import Navbar from './Component/Navbar/Navbar';
import './app.css';

import Home from './Pages/Home/Home';

import Searchpage from './Pages/Searchpage/Searchpage';
import FilterPage from './Pages/Filterpage/FilterPage';

class App extends React.Component {
	render () {
  return (
	
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/Search" element={<Searchpage />} />
      <Route path="/Filter" element={<FilterPage /> } />
      </Routes >
      <Foot />
      </Router>
    </div>
	
  );
}
}
export default App;
