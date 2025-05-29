import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App(){
  return (
    <Router>
      <Navbar/>
      <div className = " pt-20 px-6 bg-[#121212] min-h-screen text-white-20 ">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/experience" element={<Experience></Experience>}></Route>

      </Routes>
      </div>
    </Router>
  )
}

export default App; 