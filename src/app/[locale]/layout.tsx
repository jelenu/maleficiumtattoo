import type { NextLayoutIntlayer } from "next-intlayer";
import { IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { Inter, Jim_Nightshade } from "next/font/google";
import { getHTMLTextDir } from "intlayer";
import Header from "@/components/layout/Header";
import { LoadingScreen } from "@/components/ui";

export {generateStaticParams} from "next-intlayer";
export const dynamicParams = false;

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jimNightshade = Jim_Nightshade({ variable: "--font-jim-nightshade", subsets: ["latin"], weight: "400" });

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
    const { locale } = await params;
    return (
        <html lang={locale} dir={getHTMLTextDir(locale)}>
            <body className={`${inter.variable} ${jimNightshade.variable} antialiased font-sans`}>
                <IntlayerClientProvider locale={locale}>
                    <IntlayerServerProvider locale={locale}>
                        <LoadingScreen />
                        <Header />
                        {children}
                    </IntlayerServerProvider>
                </IntlayerClientProvider>
            </body>
        </html>
    );
}
export default LocaleLayout;