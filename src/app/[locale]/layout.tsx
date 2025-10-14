import type { NextLayoutIntlayer } from "next-intlayer";
import { IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { getHTMLTextDir } from "intlayer";
import Header from "@/components/layout/Header";
import { LoadingScreen } from "@/components/ui";

export { generateStaticParams } from "next-intlayer";
export const dynamicParams = false;

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;

  return (
    <IntlayerClientProvider locale={locale}>
      <IntlayerServerProvider locale={locale}>

        <div dir={getHTMLTextDir(locale)} lang={locale}>
          <LoadingScreen />
          <Header />
          {children}
        </div>
      </IntlayerServerProvider>
    </IntlayerClientProvider>
  );
};

export default LocaleLayout;
