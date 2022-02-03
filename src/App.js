import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NoMatch } from './pages/NoMatch';
import { Projects } from './pages/Projects';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route element={<NoMatch />} />
          </Routes>
        </BrowserRouter>      
    </React.Fragment>
  );
}

export default App;
