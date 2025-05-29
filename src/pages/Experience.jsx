function Experience() {
    return (
      <section className="min-h-screen px-6 py-10 bg-[#121212] text-white  ">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <img
              src="/Acema.jpg"
              alt="Acema Ingenieria"
              className="w-25 h-25 rounded-lg object-cover shadow-lg"
            />
            <div className="text-white text-left space-y-2">
              <p><span className="font-semibold"><a href="https://acemaingenieria.com/">Acema Ingenieria</a></span> </p>
              <p><span className="font-semibold">Duracioin: </span> 6 meses</p>
              <p><span className="font-semibold">Rol: </span> Desarrollador de Software</p>
              <p><span className="font-semibold">Ubicación: </span> Calle 48A #81 A 30  Calasanz – Medellin, Antioquia</p>
            </div>


          </div>

          <div className="md:w-2/3 text-white">
            <h2 className="text-3xl font-bold mb-4 border-b-2 inline-block border-white pb-1">
              Experiencia en ACEMA
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Realicé mis prácticas como desarrollador de software, donde asumí la responsabilidad total del código,
              base de datos y despliegue. Trabajé directamente con mi jefe, lo que me permitió fortalecer mis
              habilidades blandas como la comunicación, empatía y manejo del estrés bajo presión y plazos ajustados.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              <span className="font-semibold">1. Sistema de registro de horas:</span> Intervine un proyecto para el registro de horas laborales y horas extras por proyecto. El sistema fue desarrollado con <span className="italic">PHP, HTML, JavaScript y Bootstrap</span>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              <span className="font-semibold">2. Sistema de inventario de equipos:</span> Levanté requerimientos, diseñé y desarrollé un sistema interno para gestionar los computadores asignados a cada colaborador. Utilicé <span className="italic">SQL Server</span> para la base de datos y desarrollé bajo el patrón MVC usando <span className="italic">PHP, Composer, JavaScript y Bootstrap</span>. El proyecto se gestionó bajo metodología <span className="italic">SCRUM</span>. 
              Las funcionalidades incluyeron asignación/desasignación de equipos, estados, actualizaciones, fotos por modelo y reportes.
              👉 <a href="https://github.com/larguit0/Inventario_pcs" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Ver repositorio</a>
            </p>

            <p className="text-lg leading-relaxed mb-4">
              <span className="font-semibold">3. Sistema de órdenes de compra:</span> Proyecto más complejo con flujo de aprobación de órdenes según área y precio. Los usuarios podían aprobar, rechazar con observación, generar PDF de la orden, y al aprobar se inventariaban los ítems automáticamente. Se creaban remisiones desde el proyecto hacia la oficina y todo se notificaba por correo. 
              Cada ítem tenía un código único basado en el proyecto, la orden y su número. 
              👉 <a href="https://github.com/larguit0/Personal-Page" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Ver repositorio</a>
            </p>

            <p className="text-lg leading-relaxed">
              Finalmente, aprendí a desplegar proyectos en producción usando Hostinguer, incluyendo la gestión del dominio, base de datos en la nube y actualizaciones en el servidor.
            </p>
          </div>


        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <img
              src="/Tp.jpg"
              alt="Acema Ingenieria"
              className="w-25 h-25 rounded-lg object-cover shadow-lg"
            />
            <div className="text-white text-left space-y-2">
              <p><span className="font-semibold"><a href="https://acemaingenieria.com/">Acema Ingenieria</a></span> </p>
              <p><span className="font-semibold">Duracioin: </span> 6 meses</p>
              <p><span className="font-semibold">Rol: </span> Desarrollador de Software</p>
              <p><span className="font-semibold">Ubicación: </span> Calle 48A #81 A 30  Calasanz – Medellin, Antioquia</p>
            </div>


          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 border-b-2 inline-block border-white pb-1">
              Experiencia en Servicio al Cliente Bilingüe
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Actualmente me desempeño como agente de atención al cliente para AT&T, trabajando bajo la línea bilingüe de Teleperformance.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Mis funciones incluyen la solución de problemas relacionados con facturación (billing), conexión a internet, gestión de transferencias, programación de visitas técnicas, y ventas de servicios como celulares y planes de internet.
            </p>
            <p className="text-lg leading-relaxed">
              Este rol ha sido clave para reforzar el uso constante de mi segunda lengua, el inglés, permitiéndome ganar mayor confianza y fluidez en entornos profesionales y bajo presión.
            </p>
          </div>


        </div>
        

      </section>
      
    );
  }
  
  export default Experience;
  