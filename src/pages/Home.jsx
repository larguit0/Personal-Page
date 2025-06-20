function Home() {
    return (
      <section className ="h-screen bg-cover bg-center flex items-center justify-start text-white" 
      style ={{
        backgroundImage: `url('/fondoo.jpeg')`, //  imagen en la carpeta public/
      }}
      >
        <div data-aos="fade-up" className="bg-black/60 w-full h-full flex flex-col justify-center px-10 md:px-20">
        <   h1 className="text-4xl md:text-5xl font-mb-2">MIGUEL</h1>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2">LARGO</h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8">Desarrollador de Software</h2>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="https://github.com/larguit0"
                    rel="noopener noreferrer"
                    className="border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
                >
                    Portafolio
                </a>
                <a 
                    href="/MiguelAngelLargoHv.pdf"
                    download
                    className="border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
                >
                    Hoja de Vida
                </a>

            </div>


            
        </div>
      </section>
    );
  }
  
  export default Home;
  