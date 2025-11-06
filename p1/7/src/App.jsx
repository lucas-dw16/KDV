import MenuHeader from './components/MenuHeader';
import PizzaGrid from './components/PizzaGrid';
import './App.css';

const pizzas = [
  {
    id: 1,
    name: 'HAWAIIAN',
    description: 'Tomato sauce, mozzarella, ham & pineapple',
    price: '16.8',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'CHICKEN',
    description: 'Tomato sauce, mozzarella, chicken, pineapple* & bbq sauce',
    price: '17.75',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'SALAMI',
    description: 'Tomato sauce, mozzarella & mild salami',
    price: '15.55',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=600&fit=crop'
  },
  {
    id: 4,
    name: 'ORIGINAL',
    description: 'Tomato sauce, mozzarella & oregano',
    price: '18.95',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=600&fit=crop'
  }
];

function App() {
  return (
    <div className="app">
      <MenuHeader />
      <PizzaGrid pizzas={pizzas} />
    </div>
  );
}

export default App;
