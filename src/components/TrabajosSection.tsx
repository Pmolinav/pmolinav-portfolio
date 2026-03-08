import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrabajosSection = () => {
  const { t } = useLanguage();

  const trabajos = [
    {
      puesto: t("work.orenes.position"),
      empresa: t("work.orenes.company"),
      periodo: t("work.orenes.period"),
      descripcion: t("work.orenes.description"),
      tecnologias: ["Java", "Go", "API REST", t("tech.microservices"), "Docker", "Kubernetes", "AWS", "Jenkins", "Kafka", "Redis"],
    },
    {
      puesto: t("work.indra.position"),
      empresa: t("work.indra.company"),
      periodo: t("work.indra.period"),
      descripcion: t("work.indra.description"),
      tecnologias: ["Java", ".NET C#", "Oracle SQL", "AWS Redshift", "AWS S3", "Weblogic"],
    },
    {
      puesto: t("work.uclm.position"),
      empresa: t("work.uclm.company"),
      periodo: t("work.uclm.period"),
      descripcion: t("work.uclm.description"),
      tecnologias: ["Android Studio", "WordPress", "PHP", "MySQL"],
    },
  ];

  return (
    <section id="trabajos" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">{t("work.title")}</h2>
        
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