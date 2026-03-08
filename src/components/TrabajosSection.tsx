import { Briefcase } from "lucide-react";

const trabajos = [
  {
    puesto: "Desarrollador Java Backend",
    empresa: "Orenes CORE (anteriormente R.Franco Digital)",
    periodo: "Junio 2022 - Actualidad",
    descripcion: "Desarrollo de un servidor de juegos basado en arquitectura de microservicios con Java 13 y API REST. Implementación de nuevas funcionalidades, integraciones con externos, pruebas de rendimiento, mejoras de escalabilidad, revisiones de código, testing continuo y soporte. Aplicación desplegada en AWS, contenerizada con Docker y Kubernetes, CI/CD con Jenkins.",
    tecnologias: ["Java", "API REST", "Microservicios", "Docker", "Kubernetes", "AWS", "Jenkins", "Kafka", "Redis"],
  },
  {
    puesto: "Desarrollador Java y .NET",
    empresa: "Indra",
    periodo: "Octubre 2019 - Junio 2022",
    descripcion: "Desarrollo de nuevas funcionalidades con Java 8 usando Oracle SQL, EJBs, Weblogic, tecnologías AWS (Redshift, S3). Desarrollo y mantenimiento de la aplicación de trading Allegro en .NET Framework 4.5.",
    tecnologias: ["Java", ".NET C#", "Oracle SQL", "AWS Redshift", "AWS S3", "Weblogic"],
  },
  {
    puesto: "Prácticas y Beca UCLM",
    empresa: "Universidad de Castilla La Mancha",
    periodo: "Junio 2018 - Febrero 2019",
    descripcion: "Desarrollo de una aplicación con Android Studio. Creación de una web WordPress y servidor PHP con base de datos MySQL.",
    tecnologias: ["Android Studio", "WordPress", "PHP", "MySQL"],
  },
];

const TrabajosSection = () => {
  return (
    <section id="trabajos" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experiencia Laboral</h2>
        
        <div className="grid gap-6">
          {trabajos.map((trabajo, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-xl card-hover group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Briefcase className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                      {trabajo.puesto}
                    </h3>
                    <span className="text-sm text-primary font-medium">{trabajo.periodo}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{trabajo.empresa}</p>
                  <p className="text-muted-foreground mb-4">{trabajo.descripcion}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {trabajo.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrabajosSection;
