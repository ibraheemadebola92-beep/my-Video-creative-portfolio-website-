import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ui/ThemeToggle";

export const metadata: Metadata = {
  title: "Ibrahim Adebola | AI Visual Creator & Creative Director",
  description:
    "AI Visual Creator and Creative Director creating cinematic visuals, digital experiences, and AI-powered creative content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/80">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
              <a
                href="/"
                className="text-sm font-bold tracking-[0.2em] text-black dark:text-white"
              >
                SCY
              </a>

              <div className="flex items-center gap-4">
                <nav className="hidden items-center gap-6 text-sm md:flex">
                  <a
                    href="/#work"
                    className="transition-opacity hover:opacity-60"
                  >
                    Work
                  </a>
                  <a
                    href="/#about"
                    className="transition-opacity hover:opacity-60"
                  >
                    About
                  </a>
                  <a
                    href="/#contact"
                    className="transition-opacity hover:opacity-60"
                  >
                    Contact
                  </a>
                </nav>

                <ThemeToggle />
              </div>
            </div>
          </header>

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
