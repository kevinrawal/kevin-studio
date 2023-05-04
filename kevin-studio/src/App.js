import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // import this first for routing purpose 

import Navbar from './pages/navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import MyWork from './pages/MyWork';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/MyWork' element={<MyWork />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
