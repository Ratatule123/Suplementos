// app/sobre/page.tsx
export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-extrabold mb-8 text-white">
        Sobre a Loja
      </h1>

      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/10">
        <p className="text-lg text-gray-300 leading-relaxed">
          A <span className="font-semibold text-white">Suplementos Selva</span> é mais do que uma loja —
          somos uma comunidade voltada para o bem-estar, performance e qualidade de vida.
          <br /><br />
          Trabalhamos apenas com os melhores produtos do mercado, oferecendo suplementos
          confiáveis para atletas, praticantes de atividades físicas e pessoas que buscam mais
          energia no dia a dia.
          <br /><br />
          Nosso compromisso é fornecer sempre os melhores produtos com um atendimento de qualidade.
          Obrigado por escolher a gente!
        </p>
      </div>
    </div>
  );
}


