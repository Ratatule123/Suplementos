// src/app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Suplementos Belo Surto',
  description: 'Sua loja de suplementos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-black text-white">
        <Header />
        <main className="min-h-[calc(100vh-160px)] py-8 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


