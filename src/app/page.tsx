import HeroSection from '@/components/sections/HeroSection';
import AboutStudioSection from '@/components/sections/AboutStudioSection';
import StylesSection from '@/components/sections/StylesSection';
import ArtistsSection from '@/components/sections/ArtistsSection';
import InstagramSection from '@/components/sections/InstagramSection';
import ContactSection from '@/components/sections/ContactSection';
import MapSection from '@/components/sections/MapSection';

import { ArtistsSectionAlt } from '@/components/sections';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      <HeroSection />
      <AboutStudioSection />
      <StylesSection />
      <ArtistsSection />
      <ArtistsSectionAlt />
      <InstagramSection />
      <ContactSection />
      <MapSection />
    </div>
  );
}
