const habilidades = {
  frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"],
  backend: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  herramientas: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"],
  soft: ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Metodologías ágiles"],
};

const HabilidadesSection = () => {
  return (
    <section id="habilidades" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 md:p-8 rounded-xl card-hover">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
              <span className="w-2 h-2 rounded-full bg-primary" />
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {habilidades.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-xl card-hover">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
              <span className="w-2 h-2 rounded-full bg-primary" />
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {habilidades.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-xl card-hover">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
              <span className="w-2 h-2 rounded-full bg-primary" />
              Herramientas
            </h3>
            <div className="flex flex-wrap gap-3">
              {habilidades.herramientas.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-xl card-hover">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
              <span className="w-2 h-2 rounded-full bg-primary" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {habilidades.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabilidadesSection;
