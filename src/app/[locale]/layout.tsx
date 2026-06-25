import type { NextLayoutIntlayer } from "next-intlayer";
import { IntlayerClientProvider } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import Header from "@/components/layout/Header";
import AppShell from "@/components/ui/AppShell";

export const dynamicParams = false;

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;

  return (
    <IntlayerClientProvider locale={locale}>
      <IntlayerServerProvider locale={locale}>
        <Header />

        <AppShell>
          {children}
        </AppShell>

      </IntlayerServerProvider>
    </IntlayerClientProvider>
  );
};

export default LocaleLayout;