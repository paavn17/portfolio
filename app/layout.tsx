import Particles from "@/animations/background";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Pavan",
  description: "Personal Portfolio Website built with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} font-sans h-full bg-[#0d0d0d] text-white `}
        style={{ margin: 0, padding: 0 }}
      >
        {/* Background Particles */}
        <div
          className="fixed top-0 left-0 w-full h-full -z-10"
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
