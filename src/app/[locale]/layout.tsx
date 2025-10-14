import type { NextLayoutIntlayer } from "next-intlayer";
import { IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

import Header from "@/components/layout/Header";
import { LoadingScreen } from "@/components/ui";

export { generateStaticParams } from "next-intlayer";
export const dynamicParams = false;

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;

  return (
    <>
      <IntlayerClientProvider locale={locale}>
        <IntlayerServerProvider locale={locale}>
          <LoadingScreen />
          <Header />
          {children}
        </IntlayerServerProvider>
      </IntlayerClientProvider>
    </>
  );
};

export default LocaleLayout;
