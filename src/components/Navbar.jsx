import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#121212]-900 text-white fixed top-0 left-0 w-full shadow-lg z-50 rounded">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-cyan-400">Inicio</Link></li>
          <li><Link to="/about" className="hover:text-cyan-400">Sobre mí</Link></li>
          <li><Link to="/experience" className="hover:text-cyan-400">Experiencia</Link></li>
          <li><Link to="/projects" className="hover:text-cyan-400">Proyectos</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-400">Contacto</Link></li>
        </ul>
        <h1 className="text-xl  font-bold">Miguel Largo</h1>

      </div>
    </nav>
  );
}
