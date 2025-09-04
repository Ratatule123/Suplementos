// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-gray-400 py-4 mt-12">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Selva</span>
      </div>
    </footer>
  );
}

