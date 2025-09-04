// src/components/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={112}   
            height={112}  
            style={{ objectFit: 'contain' }}  
            className="mr-4"
          />
        </Link>

        <ul className="flex space-x-8 font-semibold text-lg">
          <li>
            <Link href="/produtos" className="hover:text-gray-300 transition">
              Produtos
            </Link>
          </li>
          <li>
            <Link href="/carrinho" className="hover:text-gray-300 transition">
              Carrinho
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-gray-300 transition">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-gray-300 transition">
              Contato
            </Link>
          </li>
          <li>
            <Link href="/cadastro" className="hover:text-gray-300 transition">
              Cadastro
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300 transition">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}