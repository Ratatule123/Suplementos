'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({ email: '', senha: '' });
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMensagem(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.senha,
      });

      if (error) throw error;

      setMensagem('✅ Login realizado com sucesso! Redirecionando...');
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (err: any) {
      setMensagem(`❌ Erro: ${err.message ?? 'Falha ao fazer login.'}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10 mt-12">
      <h1 className="text-3xl font-extrabold mb-6 text-white text-center">
        Login
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

      <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
            className="mt-2 p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:border-white transition"
            placeholder="Sua senha"
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
              Entrando...
            </>
          ) : (
            'Entrar'
          )}
        </button>
      </form>
    </section>
  );
}
