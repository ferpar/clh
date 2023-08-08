import "./globals.css";
import { Montserrat, Montserrat_Subrayada, PT_Serif } from "next/font/google";
import NavProvider from "@/components/NavContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const ptSerif = PT_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-serif",
});

export const metadata = {
  title: "Centro León Hebreo",
  description: "Página web del Centro León Hebreo",
  colorScheme: "light only",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${montserrat.variable}`}>
      <body>
        <NavProvider>
          <Header />
          {children}
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
