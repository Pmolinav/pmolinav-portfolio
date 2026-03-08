import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EstudiosSection from "@/components/EstudiosSection";
import TrabajosSection from "@/components/TrabajosSection";
import HabilidadesSection from "@/components/HabilidadesSection";
import ProyectosSection from "@/components/ProyectosSection";
import ContactoSection from "@/components/ContactoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EstudiosSection />
        <TrabajosSection />
        <HabilidadesSection />
        <ProyectosSection />
        <ContactoSection />
      </main>
    </div>
  );
};

export default Index;
