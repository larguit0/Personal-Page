function About() {
    return (
      <section className="min-h-screen px-6 py-10 bg-[#121212] text-white  ">
        <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src="/myAbout.jpeg"
            alt="foto Miguel"
            className="w-48 h-48 rounded-lg object-cover shadow-lg"
          />
          <div className="text-white text-left space-y-2">
            <p><span className="font-semibold">Miguel Angel Largo</span> </p>
            <p><span className="font-semibold">Edad: </span> 22 años</p>
            <p><span className="font-semibold">Trabajo Actual: </span> Agente AT&T(Bilingue)</p>
            <p><span className="font-semibold">Ubicación: </span> Medellin-Colombia</p>
          </div>


        </div>

        <div className=" md:w-2/3">
          <h2 className = "text-3xl font-bold mb-4 border-b-2 inline-block border-white pb-1">
            Sobre mi
          </h2>
          <p className="text-lg leading-relaxed">
            Soy un desarrollador de software apasionado por la tecnología y el aprendizaje continuo. 
            Me encuentro actualmente en etapa de finalizacion de mi Tecnologia en Desarrollo de softare en el <a href= "https://www.itm.edu.co/"> ITM</a>, 
            estoy enfocado en mejorar mis habilidades 
            tanto en el frontend como en el backend.
          </p>
          <p>

          </p>
          <p className="text-lg leading-relaxed">
            Disfruto resolver problemas mediante el código, trabajar en equipo y construir soluciones 
            que puedan generar impacto. Me considero una persona responsable, con disposición para enfrentar
             nuevos retos y crecer profesionalmente.

          </p>
          


        </div>


        </div>
        

      </section>
    );
  }
  
  export default About;
  