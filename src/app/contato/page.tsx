// src/app/contato/page.tsx
'use client';

import { useState } from 'react';

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
    setForm({ nome: '', email: '', mensagem: '' });

    // Esconde a mensagem depois de 4 segundos
    setTimeout(() => setSuccess(false), 4000);
  }

  return (
    <section className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
      <h1 className="text-3xl font-extrabold mb-6 text-white text-center">
        Contato
      </h1>

      {success && (
        <div className="mb-6 p-4 bg-green-600/20 border border-green-600 text-green-400 rounded-lg text-center">
          ✅ Mensagem enviada com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className="flex flex-col font-semibold text-gray-300">
          Nome
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:border-white transition"
            placeholder="Seu nome"
          />
        </label>

        <label className="flex flex-col font-semibold text-gray-300">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:border-white transition"
            placeholder="seu@email.com"
          />
        </label>

        <label className="flex flex-col font-semibold text-gray-300">
          Mensagem
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            rows={5}
            className="mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:border-white resize-none transition"
            placeholder="Escreva sua mensagem aqui"
          />
        </label>

        <button
          type="submit"
          className="bg-white text-black hover:bg-gray-200 transition py-3 rounded-lg text-lg font-semibold shadow-md"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}


