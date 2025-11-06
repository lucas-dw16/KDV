import './PizzaCard.css';

const PizzaCard = ({ pizza }) => {
    return (
        <div className="pizza-card">
            <div className="pizza-image">
                <img src={pizza.image} alt={pizza.name} />
            </div>
            <div className="pizza-info">
                <h3 className="pizza-name">{pizza.name}</h3>
                <p className="pizza-description">{pizza.description}</p>
                <div className="pizza-footer">
                    <span className="pizza-price">${pizza.price}</span>
                    <button className="view-btn">VIEW</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
