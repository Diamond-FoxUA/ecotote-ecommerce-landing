import type { Metadata } from "next";
import { Fira_Sans, Comfortaa } from "next/font/google";
import "./globals.css";

import { getDictionary } from "@/dictionaries";
import { DictionaryProvider } from "@/shared/context/DictionaryContext";

const firaSans = Fira_Sans({
  variable: "--font-fira_sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin", "cyrillic"],
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const ogLocale = locale === "uk" ? "uk_UA" : "en_US";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title: "Ecotote",
    description: dict.homepage.description,

    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        "uk-UA": `${siteUrl}/uk`,
        "en-US": `${siteUrl}/en`,
      },
    },

    openGraph: {
      title: "Ecotote",
      description: dict.homepage.description,
      url: `${siteUrl}/${locale}`,
      siteName: "Ecotote",
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Ecotote",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Ecotote",
      description: dict.homepage.description,
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default async function LocaleLayoutRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${comfortaa.variable} ${firaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DictionaryProvider dict={dict}>
          <main className="flex flex-1 flex-col">{children}</main>
        </DictionaryProvider>
      </body>
    </html>
  );
}
