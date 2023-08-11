
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';

// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/src/pages/Projects.jsx' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
