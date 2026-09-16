import type { Metadata } from 'next';
import './globals.css';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
  title: 'SCY AI Visual Creator',
  description: 'Professional AI-powered visual content creation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-900 text-white">
        <nav className="border-b border-slate-700 bg-slate-800/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SCY Creator
            </div>
            <div className="flex gap-6 items-center">
              <a href="/" className="hover:text-blue-400 transition">Home</a>
              <a href="/studio" className="hover:text-blue-400 transition">Studio</a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}