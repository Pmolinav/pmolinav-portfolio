import { useLanguage } from "@/contexts/LanguageContext";

const HabilidadesSection = () => {
  const { t } = useLanguage();

  const habilidades = {
    backend: ["Java", "Go", "API REST", t("tech.microservices"), ".NET C#", "Hibernate", "PostgreSQL", "Oracle SQL"],
    devops: ["Docker", "Kubernetes", "Jenkins", "AWS", "Kafka", "Redis", "Git"],
    herramientas: ["Kibana", "Swagger", "Postman", "JMeter", "Jira", "Confluence"],
    soft: [
      t("skills.soft.teamwork"),
      t("skills.soft.clients"),
      t("skills.soft.docs"),
      t("skills.soft.mentoring"),
      t("skills.soft.scrum"),
    ],
  };

  return (
    <section id="habilidades" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-title">{t("skills.title")}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-6 md:p-8 rounded-xl card-hover">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
              <span className="w-2 h-2 rounded-full bg-primary" />
              {t("skills.backend")}
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
              {t("skills.devops")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {habilidades.devops.map((skill) => (
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
              {t("skills.tools")}
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
              {t("skills.soft")}
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