export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          
          <p className="text-center md:text-left mb-4 md:mb-0 text-sm">
            © {new Date().getFullYear()} Miguel Ángel Largo. Todos los derechos reservados.
          </p>
  
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="https://wa.link/w0t16q" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 flex items-center">
              <img src="/whatsapp-icon.jpg" alt="WhatsApp" className="w-6 h-6 mr-2" />
              WhatsApp
            </a>
  
            <a href="https://www.linkedin.com/in/miguel-angel-largo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center">
              <img src="/linkedin-icon.jpg" alt="LinkedIn" className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
  
            <a href="mailto:miguepz12@gmail.com" className="hover:text-red-400 flex items-center">
              <img src="/gmail-icon.jpg" alt="Gmail" className="w-6 h-6 mr-2" />
              Gmail
            </a>
  
            <a href="mailto:miguellargo310008@correo.itm.edu.co" className="hover:text-blue-300 flex items-center">
              <img src="/outlook-icon.jpg" alt="Outlook" className="w-6 h-6 mr-2" />
              Outlook
            </a>
          </div>
        </div>
      </footer>
    );
  }