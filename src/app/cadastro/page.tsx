// src/app/cadastro/page.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient'
import { Loader2 } from 'lucide-react';

export default function CadastroPage() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMensagem(null);

    try {
      // 1) Cria usuário com Supabase Auth (NÃO armazene senha em sua tabela)
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.senha,
        options: {
          data: { nome: form.nome }, // vai para raw_user_meta_data
          emailRedirectTo: `${window.location.origin}/`,
        },
      });

      if (error) throw error;

      // Se confirmação por e-mail estiver ativa (padrão), o usuário precisa confirmar.
      // A linha abaixo só reforça a mensagem de próximo passo para o usuário.
      if (data?.user) {
        setMensagem('✅ Cadastro criado! Verifique seu e-mail para confirmar a conta.');
        setForm({ nome: '', email: '', senha: '' });
      }
    } catch (err: any) {
      setMensagem(`❌ Erro: ${err.message ?? 'Falha ao cadastrar.'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10 mt-12">
      <h1 className="text-3xl font-extrabold mb-6 text-white text-center">
        Cadastro
      </h1>

      {mensagem && (
        <div
          className={`mb-6 p-4 rounded-lg text-center border ${
            mensagem.startsWith('✅')
              ? 'bg-green-600/20 border-green-600 text-green-400'
              : 'bg-red-600/20 border-red-600 text-red-400'
          }`}
        >
          {mensagem}
        </div>
      )}

      <form onSubmit={handleCadastro} className="flex flex-col gap-5">
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
          Senha
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            required
            minLength={6}
            className="mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:border-white transition"
            placeholder="Mínimo 6 caracteres"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-white text-black hover:bg-gray-200 transition py-3 rounded-lg text-lg font-semibold shadow-md flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Cadastrando...
            </>
          ) : (
            'Criar conta'
          )}
        </button>
      </form>
    </section>
  );
}
