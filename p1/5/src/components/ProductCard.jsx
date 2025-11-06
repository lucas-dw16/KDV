import { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="product-card">

  
      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Info */}
      <div className="product-info">

     

        {/* Name & Description */}
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {/* Price */}
        <div className="product-price">
          {product.oldPrice && <span className="price-old">€{product.oldPrice}</span>}
          <span className="price-current">
            <span className="price-euro">€</span>
            <span className="price-whole">{product.price}</span>
            <span className="price-cents">{product.priceCents || '99'}</span>
          </span>
        </div>
        {product.priceNote && <div className="price-note">{product.priceNote}</div>}

        {/* Rating */}
        {product.rating && (
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < Math.floor(product.rating) ? 'star filled' : 'star'}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="rating-count">({product.reviewCount})</span>
          </div>
        )}

        {/* Actions */}
        <div className="product-actions">
          <button className="btn-add-to-cart" aria-label="In winkelwagen">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <button
            className={`btn-favorite ${isFavorite ? 'active' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="Toevoegen aan favorieten"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isFavorite ? 'currentColor' : 'none'}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                   C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                   c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="product-colors">
            <span className="colors-label">Meer opties</span>
            <div className="color-swatches">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="color-swatch"
                  style={{ backgroundColor: color }}
                  aria-label={`Kleur ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductCard;
