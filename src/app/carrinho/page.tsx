// app/carrinho/page.tsx
'use client';

import useCartStore from '../store/cart-store';

export default function CarrinhoPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-black text-center">
        Seu Carrinho
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          Seu carrinho está vazio.
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`/images/${item.image}`}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 text-lg">R$ {item.price.toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



