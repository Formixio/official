import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Formixio - Your own Maths Trainer",
  description: "By Aarav Shukla and Aashi Shukla",
  keywords:
    "Formixio, IT Solutions, EdTech, Web Development, IT Consultancy, Cloud Solutions, Digital Transformation, Software Development, Business Success, Technology Solutions, Innovative IT Services",
  openGraph: {
    title: "Formixio",
    description: "By Aarav Shukla and Aashi Shukla",
    url: "www.formixio.com",
    siteName: "Formixio - Your own Maths Trainer",
    type: "website",
    images: "",
  },
  robots: {
    index:true,
    follow: true,
},
twitter: {
    card: "summary_large_image",
    title: "Formixio - Your own Maths Trainer",
    description: "By Aarav Shukla and Aashi Shukla",
    images: [""],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
