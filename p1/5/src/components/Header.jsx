import './Header.css';

const Header = ({ productCount }) => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="breadcrumb">
                    <a href="#">Home</a>
                    <span>/</span>
                    <span>Producten</span>
                    <span>/</span>
                    <span>Lampen</span>
                </div>
            </div>

            <div className="header-main">
                <h1 className="page-title">Lampen</h1>
                <div className="product-count">{productCount} items</div>
            </div>

            <div className="header-filters">
                <div className="filters-left">
                    <button className="filter-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M3 4h18M3 12h12M3 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Alle filters
                    </button>
                </div>

                <div className="filters-right">
                    <label htmlFor="sort" className="sort-label">Sorteren op:</label>
                    <select id="sort" className="sort-select">
                        <option value="relevance">Meest relevant</option>
                        <option value="price-low">Prijs: laag naar hoog</option>
                        <option value="price-high">Prijs: hoog naar laag</option>
                        <option value="newest">Nieuwste</option>
                        <option value="popular">Populairste</option>
                    </select>

                    <button className="view-toggle" aria-label="Simpele weergave">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="2" />
                            <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="2" />
                            <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="2" />
                            <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
