// app/produtos/page.tsx
import products from '../../data/products';
import ProductCard from '../../components/ProductCard';

export default function ProdutosPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-12">
        Nossos Suplementos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}


