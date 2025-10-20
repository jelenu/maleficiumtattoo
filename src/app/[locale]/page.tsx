import { type NextPageIntlayer, IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import {
    HeroSection,
    AboutStudioSection,
    StylesSection,
    CarouselSection,
    ArtistsSection,
    ContactSection,
    MapSection,
} from "@/components/sections";
import CookieConsent from "@/components/features/CookieConsent";

const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;
    
    return (
        <IntlayerClientProvider locale={locale}>
            <IntlayerServerProvider locale={locale}>
                <main className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
                    <HeroSection />
                    <AboutStudioSection />
                    <StylesSection />
                    <CarouselSection />
                    <ArtistsSection />
                    <ContactSection />
                    <MapSection />
                    <div className="pt-[4rem]" />
                    {/* Cookie consent banner (fixed, renders once when needed) */}
      <CookieConsent />
                </main>
            </IntlayerServerProvider>
        </IntlayerClientProvider>
    );
}

export default Page;