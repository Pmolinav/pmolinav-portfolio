import { ExternalLink, Github } from "lucide-react";

const proyectos = [
  {
    titulo: "E-Commerce Platform",
    descripcion: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    imagen: "/placeholder.svg",
    tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    titulo: "Task Management App",
    descripcion: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
    imagen: "/placeholder.svg",
    tecnologias: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    titulo: "Weather Dashboard",
    descripcion: "Dashboard interactivo que muestra información meteorológica con visualizaciones de datos avanzadas.",
    imagen: "/placeholder.svg",
    tecnologias: ["React", "D3.js", "OpenWeather API"],
    github: "#",
    demo: "#",
  },
  {
    titulo: "Portfolio Generator",
    descripcion: "Herramienta para crear portfolios profesionales de forma rápida y sencilla con plantillas personalizables.",
    imagen: "/placeholder.svg",
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];

const ProyectosSection = () => {
  return (
    <section id="proyectos" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Proyectos Personales</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden card-hover group"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full text-foreground hover:text-primary transition-colors"
                    aria-label="Ver código en GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card rounded-full text-foreground hover:text-primary transition-colors"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {proyecto.titulo}
                </h3>
                <p className="text-muted-foreground mb-4">{proyecto.descripcion}</p>
                
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosSection;
