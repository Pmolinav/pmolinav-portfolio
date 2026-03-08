import { Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mx-auto w-fit">{t("contact.title")}</h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            {t("contact.description")}
          </p>
          
          <div className="flex justify-center gap-6">
            <a
              href="mailto:pablo7molina97@gmail.com"
              className="icon-social"
              aria-label="Enviar email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/pablo-molina-villar-52323a179"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-social"
              aria-label="Perfil de LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/pmolinav"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-social"
              aria-label="Perfil de GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pablo Molina Villar. {t("contact.copyright")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;