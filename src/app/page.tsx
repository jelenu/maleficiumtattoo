import {
  HeroSection,
  AboutStudioSection,
  StylesSection,
  CarouselSection,
  ArtistsSection,
  ContactSection,
  MapSection,
} from '@/components/sections';


export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      <HeroSection />
      <AboutStudioSection />
      <StylesSection />
      <CarouselSection />
      <ArtistsSection />
      <ContactSection />
      <MapSection />
    </div>
  );
}
