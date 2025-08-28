import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
