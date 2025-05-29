import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App(){
  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true,
    });
  },[]);
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
    <Footer/>
    </Router>
  )
}

export default App; 