import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import './App.css';

// Demo product data gebaseerd op de IKEA afbeelding
const products = [
  {
    id: 1,
    name: 'SINNERLIG',
    description: 'Hanglamp, 23 cm',
    price: '29',
    priceCents: '99',
    oldPrice: '34.99',
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 103,
    isNew: true,
    colors: ['#D4A574', '#8B7355']
  },
  {
    id: 2,
    name: 'VÄRMFINT',
    description: 'Led-lamp tafellamp, 30 cm',
    price: '49',
    priceCents: '99',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    rating: 4,
    reviewCount: 71,
    colors: ['#D4773E', '#FFFFFF', '#808080']
  },
  {
    id: 3,
    name: 'FADO',
    description: 'Tafellamp, 25 cm',
    price: '14',
    priceCents: '99',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 674,
    colors: ['#FFFFFF', '#808080', '#111111']
  },
  {
    id: 4,
    name: 'BLÅVERK',
    description: 'Tafellamp, 26 cm',
    price: '14',
    priceCents: '99',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&h=400&fit=crop',
    rating: 4,
    reviewCount: 201,
    colors: ['#C0C0C0', '#FFD700', '#FFFFFF']
  },
  {
    id: 5,
    name: 'LAUTERS',
    description: 'Vloerlamp',
    price: '49',
    priceCents: '99',
    image: 'https://images.unsplash.com/photo-1550985543-f47f38aeee65?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 81,
    isNew: true,
    colors: ['#D4A574', '#808080']
  },
  {
    id: 6,
    name: 'NYMÅNE',
    description: 'Vloerlamp leeslamp',
    price: '49',
    priceCents: '99',
    image: 'https://images.unsplash.com/photo-1543198126-a8ad8a7e1a9b?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 82,
    isNew: true,
    colors: ['#3C3C3C', '#FFFFFF']
  },
  {
    id: 7,
    name: 'TÄRNABY',
    description: 'Tafellamp, 25 cm',
    price: '14',
    priceCents: '99',
    image: 'https://images.unsplash.com/photo-1565538810323-91846b5c0909?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 276,
    isNew: true,
    isTopSeller: true,
    colors: ['#3C3C3C', '#C0A080', '#111111']
  },
  {
    id: 8,
    name: 'NYMÅNE',
    description: 'Vloerlamp (3-spots)',
    price: '59',
    priceCents: '99',
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 123,
    isTopSeller: true,
    colors: ['#3C3C3C', '#FFFFFF']
  },
  {
    id: 9,
    name: 'PELLNÄS',
    description: 'Led plafondlamp/wandlamp, 25 cm',
    price: '4',
    priceCents: '99',
    oldPrice: '7.49',
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop&sat=-100',
    rating: 4,
    reviewCount: 51,
    isTopSeller: true,
    priceNote: 'Producten met sticker'
  },
  {
    id: 10,
    name: 'SJULNÄS',
    description: 'Tafellamp, 28 cm',
    price: '19',
    priceCents: '99',
    oldPrice: '24.99',
    image: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 49,
    isNew: true,
    colors: ['#D4AF37', '#FFFFFF']
  },
  {
    id: 11,
    name: 'ROLLSTA',
    description: 'Plafondlamp, 27 cm',
    price: '29',
    priceCents: '99',
    oldPrice: '34.99',
    image: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 52,
    isNew: true
  },
  {
    id: 12,
    name: 'LEDEKOEN LIBARETT',
    description: 'Staande lamp/leeslamp (boog)',
    price: '119',
    priceCents: '99',
    image: 'https://images.unsplash.com/photo-1585237672016-f85bb4c5c440?w=400&h=400&fit=crop',
    rating: 4,
    reviewCount: 3,
    colors: ['#D4A574', '#808080']
  }
];

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header productCount={products.length} />
        <main className="main-content">
          <ProductGrid products={products} />
        </main>
      </div>
    </div>
  );
}

export default App;
