import { GraduationCap } from "lucide-react";

const estudios = [
  {
    titulo: "Grado en Ingeniería Informática",
    institucion: "Universidad Ejemplo",
    periodo: "2018 - 2022",
    descripcion: "Especialización en desarrollo de software y sistemas distribuidos.",
  },
  {
    titulo: "Máster en Desarrollo Web",
    institucion: "Escuela de Tecnología",
    periodo: "2022 - 2023",
    descripcion: "Formación avanzada en tecnologías web modernas y metodologías ágiles.",
  },
  {
    titulo: "Certificación AWS Cloud Practitioner",
    institucion: "Amazon Web Services",
    periodo: "2023",
    descripcion: "Fundamentos de computación en la nube y servicios AWS.",
  },
];

const EstudiosSection = () => {
  return (
    <section id="estudios" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Estudios</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {estudios.map((estudio, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 mt-1" />
                
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-card p-6 rounded-xl card-hover">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm text-primary font-medium">{estudio.periodo}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {estudio.titulo}
                    </h3>
                    <p className="text-muted-foreground mb-2">{estudio.institucion}</p>
                    <p className="text-sm text-muted-foreground">{estudio.descripcion}</p>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstudiosSection;
