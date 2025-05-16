import React from 'react';

// Utility function to format numbers with K
const formatNumberWithK = (number) => number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number;

function StoreHeader({ store }) {
  if (!store) return null;
  
  return (
    <div className="store-item">
      <div className="store-image-container">
        {store.image ? (
          <img src={store.image} alt={store.name} className="store-image" />
        ) : (
          <div className="store-image-placeholder">{store.name.charAt(0)}</div>
        )}
      </div>
      <div className="store-info">
        <div className="store-text-info">
          <h2 className="store-name">{store.name}</h2>
          <p className="store-owner">{store.owner}</p>
        </div>
        <div className="store-stats">
          <div className="stat">
            <span className="stat-icon">🛍️</span>
            <span className="stat-value">{formatNumberWithK(store.products)}</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{formatNumberWithK(store.rating)}</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreView({ store, selectedProduct, renderProductGrid, renderProductDetail }) {
  if (!store) return null;
  
  return (
    <div className="store-page">
      <StoreHeader store={store} />
      <h3 className="section-title">Products</h3>
      {selectedProduct ? renderProductDetail() : renderProductGrid()}
    </div>
  );
}

export default StoreView;
export { StoreHeader };