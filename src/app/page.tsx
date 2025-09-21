import HeroSection from '@/components/sections/HeroSection';
import AboutStudioSection from '@/components/sections/AboutStudioSection';
import StylesSection from '@/components/sections/StylesSection';
import ArtistsSection from '@/components/sections/ArtistsSection';
import ContactSection from '@/components/sections/ContactSection';
import MapSection from '@/components/sections/MapSection';


export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      <HeroSection />
      <AboutStudioSection />
      <StylesSection />
      <ArtistsSection />
      <ContactSection />
      <MapSection />
    </div>
  );
}
