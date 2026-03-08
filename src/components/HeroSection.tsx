import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Code pattern background */}
      <div className="absolute inset-0 opacity-[0.07] text-primary font-mono text-base leading-relaxed overflow-hidden select-none pointer-events-none" aria-hidden="true">
        <div className="absolute top-[5%] left-[3%] rotate-[-8deg]">{'const dev = () => {'}</div>
        <div className="absolute top-[12%] right-[8%] rotate-[5deg]">{'import React from "react";'}</div>
        <div className="absolute top-[22%] left-[15%] rotate-[3deg]">{'function buildApp() {'}</div>
        <div className="absolute top-[30%] right-[20%] rotate-[-4deg]">{'<Component props={data} />'}</div>
        <div className="absolute top-[40%] left-[5%] rotate-[6deg]">{'npm run deploy'}</div>
        <div className="absolute top-[50%] right-[5%] rotate-[-3deg]">{'git commit -m "feat"'}</div>
        <div className="absolute top-[60%] left-[25%] rotate-[-6deg]">{'export default App;'}</div>
        <div className="absolute top-[70%] right-[15%] rotate-[4deg]">{'const [state, setState]'}</div>
        <div className="absolute top-[78%] left-[8%] rotate-[2deg]">{'async fetchData() {'}</div>
        <div className="absolute top-[88%] right-[10%] rotate-[-5deg]">{'return <div>...</div>'}</div>
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/3 left-[20%] w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <p className="text-primary font-medium mb-4 animate-fade-up">
              {t("hero.greeting")}
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up animation-delay-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pablo Molina Villar
            </h1>
            <h2 className="text-2xl md:text-3xl text-gradient font-semibold mb-8 animate-fade-up animation-delay-400">
              {t("hero.role")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-fade-up animation-delay-400">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up animation-delay-400">
              <a
                href="#trabajos"
                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}
              >
                {t("hero.experience")}
              </a>
              <a
                href="#contacto"
                className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300"
              >
                {t("hero.contact")}
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="order-1 md:order-2 flex-shrink-0 animate-fade-up">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Pablo Molina Villar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/10 -z-10" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;