import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import { Providers } from "@/components/Providers";
import "@/app/globals.css";
import Script from "next/script";
import { generateOrganizationSchema } from "@/lib/structured-data";

const organizationSchema = generateOrganizationSchema('he'); // Use default lang for site-wide schema

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isHe = lang === 'he';
  const baseUrl = 'https://ai-experts.co.il';
  const url = `${baseUrl}/${lang}`;

  const title = isHe
    ? "מומחי AI, ייעוץ והטמעת בינה מלאכותית לארגונים | AI Experts"
    : "AI Implementation, Consulting & Experts | AI Experts Israel";

  const description = isHe
    ? "הפלטפורמה המובילה להטמעת בינה מלאכותית, פיתוח כלי AI וסוכנים חכמים. מצאו מומחי אוטומציה ומרצים מובילים לסדנאות והדרכות בארגון שלכם."
    : "Israel's leading platform for AI Implementation, Development, and Smart Agents. Connect with top Automation experts and lecturers for corporate strategy and value.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'he-IL': `${baseUrl}/he`,
        'en-US': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: isHe ? "AI Experts - הנבחרת של מומחי הבינה המלאכותית בישראל" : "AI Experts - Israel's Executive AI Network",
      description,
      url,
      siteName: 'AI Experts Israel',
      images: [
        {
          url: `${baseUrl}/images/og-share.png`,
          width: 1200,
          height: 630,
          alt: isHe ? 'מומחי AI בישראל' : 'AI Experts Israel',
        },
      ],
      locale: isHe ? 'he_IL' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-share.png`],
    },
    verification: {
      google: "4iZHOg03jkR6LQIPqBqDwEFrjJef9WsylBfkw4Lr1WM",
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = params.lang;
  const isRtl = lang === 'he';

  return (
    <html lang={lang} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NHQK3DVT');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHQK3DVT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>
          <Header lang={lang as 'he' | 'en'} />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
            {props.children}
          </main>
          <Footer lang={lang as 'he' | 'en'} />
          <FloatingActionButton
            lang={lang as 'he' | 'en'}
            label={isRtl ? 'פרויקט חדש' : 'New Project'}
          />
        </Providers>
      </body>
    </html>
  );
}
