// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white">
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-xl max-w-3xl text-center border border-white/10">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Suplementos <span className="text-gray-300">Selva</span>
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          A loja perfeita para quem busca{' '}
          <span className="font-semibold text-white">
            performance, saúde e estilo de vida ativo
          </span>
          . Nossos suplementos são escolhidos a dedo para trazer os melhores resultados a você.
        </p>

        <Link
          href="/produtos"
          className="inline-block bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-xl text-lg font-semibold transition shadow-md"
        >
          Ver Produtos
        </Link>
      </div>
    </div>
  );
}



   