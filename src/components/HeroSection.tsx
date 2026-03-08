const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 animate-fade-up">
            ¡Hola! Soy
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-up animation-delay-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tu Nombre Completo
          </h1>
          <h2 className="text-2xl md:text-3xl text-gradient font-semibold mb-8 animate-fade-up animation-delay-400">
            Desarrollador Full Stack
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-400">
            Apasionado por crear experiencias digitales únicas y funcionales. 
            Me especializo en el desarrollo web moderno, combinando diseño atractivo 
            con código limpio y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <a
              href="#trabajos"
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}
            >
              Mi experiencia
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
