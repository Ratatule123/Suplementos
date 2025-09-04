// data/products.ts
import type { Product } from '../src/lib/types';

const products: Product[] = [
  {
    id: 1,
    name: 'Whey Protein',
    description: 'Proteína de alto valor biológico para recuperação muscular.',
    price: 89.9,
    category: 'Proteínas',
    featured: true,
    image: 'whey.jpg',
  },
  {
    id: 2,
    name: 'Creatina',
    description: 'Aumenta força, potência e desempenho nos treinos.',
    price: 49.9,
    category: 'Performance',
    featured: false,
    image: 'creatina.jpg',
  },
  {
    id: 3,
    name: 'BCAA',
    description: 'Aminoácidos essenciais para reduzir fadiga e preservar músculos.',
    price: 59.9,
    category: 'Aminoácidos',
    featured: false,
    image: 'bcaa.jpg',
  },
];

export default products;
