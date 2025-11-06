import PizzaCard from './PizzaCard';
import './PizzaGrid.css';

const PizzaGrid = ({ pizzas }) => {
    return (
        <div className="pizza-grid">
            {pizzas.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
        </div>
    );
};

export default PizzaGrid;
