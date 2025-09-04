// components/ProductCard.tsx
'use client';

import useCartStore from '../app/store/cart-store';

export default function ProductCard({ product }: { product: any }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-black/5 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center text-center border border-white/10">
      <img
        src={`/images/${product.image}`}
        alt={product.name}
        className="w-36 h-36 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
      <p className="text-white/80 font-bold text-lg mb-4">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-md font-medium transition shadow-sm"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

