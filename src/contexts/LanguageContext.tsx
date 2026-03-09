import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    "nav.inicio": "Inicio",
    "nav.estudios": "Estudios",
    "nav.experiencia": "Experiencia",
    "nav.habilidades": "Habilidades",
    "nav.proyectos": "Proyectos",
    "nav.contacto": "Contacto",
    
    // Hero
    "hero.greeting": "¡Hola! Soy",
    "hero.role": "Backend Software Engineer",
    "hero.description": "Desarrollador Backend con más de 6 años de experiencia. Especializado en desarrollo de aplicaciones escalables con microservicios, APIs REST, Java, Go, caching, paso de mensajes y contenerización.",
    "hero.experience": "Mi experiencia",
    "hero.contact": "Contactar",
    
    // Studies
    "studies.title": "Estudios",
    "studies.degree.title": "Grado en Ingeniería Informática",
    "studies.degree.institution": "Universidad de Castilla La Mancha (UCLM), Albacete",
    "studies.degree.period": "2015 - 2019",
    "studies.degree.description": "Formación integral en desarrollo de software, sistemas y arquitecturas informáticas.",
    "studies.master.title": "Máster en Profesorado de Educación Secundaria y Bachillerato",
    "studies.master.institution": "Universidad de Castilla La Mancha (UCLM), Albacete",
    "studies.master.period": "2020 - 2021",
    "studies.master.description": "Especialización en Tecnología e Informática.",
    "studies.tfg.title": "Trabajo Final de Grado",
    "studies.tfg.institution": "UCLM",
    "studies.tfg.period": "2019",
    "studies.tfg.description": "Elaboración de un juego serio con modalidad multijugador creado con Unity 3D (C#). Nota: 9.5.",
    "studies.secondary.title": "Secundaria y Bachillerato",
    "studies.secondary.institution": "I.E.S Ramón Giraldo, Villanueva de los Infantes (Ciudad Real)",
    "studies.secondary.period": "2009 - 2015",
    "studies.secondary.description": "Educación secundaria y bachillerato tecnológico.",
    
    // Work
    "work.title": "Experiencia Laboral",
    "work.orenes.position": "Desarrollador Backend",
    "work.orenes.company": "Orenes CORE (anteriormente R.Franco Digital)",
    "work.orenes.period": "Junio 2022 - Actualidad",
    "work.orenes.description": "Desarrollo de un servidor de juegos basado en arquitectura de microservicios con Java 21, Golang 1.25 y API REST. Implementación de nuevas funcionalidades, integraciones con externos, pruebas de rendimiento, mejoras de escalabilidad, revisiones de código, testing continuo y soporte. Aplicación desplegada en AWS, contenerizada con Docker y Kubernetes, CI/CD con Jenkins.",
    "work.indra.position": "Desarrollador Java y .NET",
    "work.indra.company": "Indra",
    "work.indra.period": "Octubre 2019 - Junio 2022",
    "work.indra.description": "Desarrollo de nuevas funcionalidades con Java 8 usando Oracle SQL, EJBs, Weblogic, tecnologías AWS (Redshift, S3). Desarrollo y mantenimiento de la aplicación de trading Allegro en .NET Framework 4.5.",
    "work.uclm.position": "Prácticas y Beca UCLM",
    "work.uclm.company": "Universidad de Castilla La Mancha",
    "work.uclm.period": "Junio 2018 - Febrero 2019",
    "work.uclm.description": "Desarrollo de una aplicación con Android Studio. Creación de una web WordPress y servidor PHP con base de datos MySQL.",
    
    // Skills
    "skills.title": "Habilidades",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Cloud",
    "skills.tools": "Herramientas & Testing",
    "skills.soft": "Soft Skills",
    "skills.soft.teamwork": "Trabajo en equipo",
    "skills.soft.clients": "Contacto con clientes",
    "skills.soft.docs": "Documentación",
    "skills.soft.mentoring": "Mentorización",
    "skills.soft.scrum": "Metodología Scrum",
    
    // Tech tags
    "tech.microservices": "Microservicios",
    "tech.api.rest": "API REST",
    // Projects
    "projects.title": "Proyectos Personales",
    "projects.ecommerce.title": "E-Commerce Platform",
    "projects.ecommerce.description": "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
    "projects.tasks.title": "Task Management App",
    "projects.tasks.description": "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
    "projects.weather.title": "Weather Dashboard",
    "projects.weather.description": "Dashboard interactivo que muestra información meteorológica con visualizaciones de datos avanzadas.",
    "projects.portfolio.title": "Portfolio Generator",
    "projects.portfolio.description": "Herramienta para crear portfolios profesionales de forma rápida y sencilla con plantillas personalizables.",
    
    // Contact
    "contact.title": "Contacto",
    "contact.description": "¿Tienes un proyecto en mente o simplemente quieres saludar? No dudes en contactarme a través de cualquiera de estos canales.",
    "contact.copyright": "Todos los derechos reservados.",
  },
  en: {
    // Navigation
    "nav.inicio": "Home",
    "nav.estudios": "Education",
    "nav.experiencia": "Experience",
    "nav.habilidades": "Skills",
    "nav.proyectos": "Projects",
    "nav.contacto": "Contact",
    
    // Hero
    "hero.greeting": "Hi! I'm",
    "hero.role": "Backend Software Engineer",
    "hero.description": "Backend Developer with over 6 years of experience. Specialized in scalable applications development with microservices, REST APIs, Java, Go, caching, message passing and containerization.",
    "hero.experience": "My experience",
    "hero.contact": "Contact me",
    
    // Studies
    "studies.title": "Education",
    "studies.degree.title": "Computer Engineering Degree",
    "studies.degree.institution": "University of Castilla La Mancha (UCLM), Albacete",
    "studies.degree.period": "2015 - 2019",
    "studies.degree.description": "Comprehensive training in software development, systems and computer architectures.",
    "studies.master.title": "Master's in Secondary and High School Teaching",
    "studies.master.institution": "University of Castilla La Mancha (UCLM), Albacete",
    "studies.master.period": "2020 - 2021",
    "studies.master.description": "Specialization in Technology and Computer Science.",
    "studies.tfg.title": "Final Degree Project",
    "studies.tfg.institution": "UCLM",
    "studies.tfg.period": "2019",
    "studies.tfg.description": "Development of a serious game with multiplayer mode created with Unity 3D (C#). Grade: 9.5.",
    "studies.secondary.title": "Secondary and High School",
    "studies.secondary.institution": "I.E.S Ramón Giraldo, Villanueva de los Infantes (Ciudad Real)",
    "studies.secondary.period": "2009 - 2015",
    "studies.secondary.description": "Secondary education and technological high school.",
    
    // Work
    "work.title": "Work Experience",
    "work.orenes.position": "Backend Developer",
    "work.orenes.company": "Orenes CORE (formerly R.Franco Digital)",
    "work.orenes.period": "June 2022 - Present",
    "work.orenes.description": "Development of a game server based on microservices architecture with Java 21, Golang 1.25 and REST API. Implementation of new features, external integrations, performance testing, scalability improvements, code reviews, continuous testing and support. Application deployed on AWS, containerized with Docker and Kubernetes, CI/CD with Jenkins.",
    "work.indra.position": "Java and .NET Developer",
    "work.indra.company": "Indra",
    "work.indra.period": "October 2019 - June 2022",
    "work.indra.description": "Development of new features with Java 8 using Oracle SQL, EJBs, Weblogic, AWS technologies (Redshift, S3). Development and maintenance of Allegro trading application in .NET Framework 4.5.",
    "work.uclm.position": "Internship and UCLM Scholarship",
    "work.uclm.company": "University of Castilla La Mancha",
    "work.uclm.period": "June 2018 - February 2019",
    "work.uclm.description": "Development of an application with Android Studio. Creation of a WordPress website and PHP server with MySQL database.",
    
    // Skills
    "skills.title": "Skills",
    "skills.backend": "Backend",
    "skills.devops": "DevOps & Cloud",
    "skills.tools": "Tools & Testing",
    "skills.soft": "Soft Skills",
    "skills.soft.teamwork": "Teamwork",
    "skills.soft.clients": "Client communication",
    "skills.soft.docs": "Documentation",
    "skills.soft.mentoring": "Mentoring",
    "skills.soft.scrum": "Scrum Methodology",
    
    // Tech tags
    "tech.microservices": "Microservices",
    "tech.api.rest": "REST API",
    // Projects
    "projects.title": "Personal Projects",
    "projects.ecommerce.title": "E-Commerce Platform",
    "projects.ecommerce.description": "Complete e-commerce platform with shopping cart, payment gateway and admin panel.",
    "projects.tasks.title": "Task Management App",
    "projects.tasks.description": "Task management application with real-time collaboration features and notifications.",
    "projects.weather.title": "Weather Dashboard",
    "projects.weather.description": "Interactive dashboard displaying weather information with advanced data visualizations.",
    "projects.portfolio.title": "Portfolio Generator",
    "projects.portfolio.description": "Tool to create professional portfolios quickly and easily with customizable templates.",
    
    // Contact
    "contact.title": "Contact",
    "contact.description": "Have a project in mind or just want to say hello? Feel free to contact me through any of these channels.",
    "contact.copyright": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};