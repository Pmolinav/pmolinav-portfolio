import { Briefcase } from "lucide-react";

const trabajos = [
  {
    puesto: "Desarrollador Full Stack Senior",
    empresa: "Tech Company",
    periodo: "2023 - Presente",
    descripcion: "Liderando el desarrollo de aplicaciones web escalables con React, Node.js y AWS. Mentorización de desarrolladores junior.",
    tecnologias: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    puesto: "Desarrollador Frontend",
    empresa: "Startup Digital",
    periodo: "2021 - 2023",
    descripcion: "Desarrollo de interfaces de usuario modernas y responsivas. Implementación de sistemas de diseño y optimización de rendimiento.",
    tecnologias: ["Vue.js", "Tailwind CSS", "GraphQL"],
  },
  {
    puesto: "Desarrollador Web Junior",
    empresa: "Agencia Creativa",
    periodo: "2020 - 2021",
    descripcion: "Creación de sitios web corporativos y e-commerce. Colaboración con equipos de diseño para implementar experiencias de usuario.",
    tecnologias: ["HTML", "CSS", "JavaScript", "WordPress"],
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
