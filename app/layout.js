import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CardContext";
import { Toaster } from "react-hot-toast";
import ViewCartButton from "./viewCartButton/viewCartButton";
import { Lobster_Two } from "next/font/google";

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster-two",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduVault",
  description: "EduVault – your one-stop platform to explore, learn, and purchase coding courses with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libertinus+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lobsterTwo.variable} antialiased`}
      >
        <CartProvider>
          <NavBar />
          {children}
          <Toaster position="bottom-center" reverseOrder={false} />
          <ViewCartButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
