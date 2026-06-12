import type { Metadata } from "next";
// Vendor styles (order matters: Bootstrap first, theme overrides last).
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

import { LanguageProvider } from "@/context/LanguageContext";
import ScriptsInit from "@/components/ScriptsInit";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "OKM-Portfolio",
  description:
    "Portfolio de Kiboyou Mohamed OUATTARA, Développeur Python Certifié PCAP",
  keywords: [
    "Python",
    "Django",
    "React",
    "Développeur",
    "Full Stack",
    "Portfolio",
    "Kiboyou",
    "Mohamed",
    "OUATTARA",
  ],
  authors: [{ name: "Kiboyou Mohamed OUATTARA" }],
  icons: { icon: "/OKM.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <ScrollToTopButton />
          <ScriptsInit />
        </LanguageProvider>
      </body>
    </html>
  );
}
