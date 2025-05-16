import React from 'react';

export function ProductGrid({ selectedStore, handleProductClick, noSearchResults, searchTerm }) {
  if (!selectedStore?.productsList?.length) return <p>No products available.</p>;
  
  if (noSearchResults) {
    return (
      <div className="no-search-results">
        <h2>No matches found for: "{searchTerm}"</h2>
        <p>Please try a different search term.</p>
      </div>
    );
  }
  
  return (
    <div className="product-grid">
      {selectedStore.productsList.map(product => (
        <div key={product.id} className="product-item" onClick={() => handleProductClick(product.id)}>
          {product.image ? 
            <img src={product.image} alt={product.name} /> : 
            <div className="product-placeholder">{product.name.charAt(0)}</div>
          }
          <div>{product.name}</div>
          <div>${product.price}</div>
        </div>
      ))}
    </div>
  );
}

export function ProductDetail({ 
  selectedProduct, 
  quantity, 
  increaseQuantity, 
  decreaseQuantity, 
  handleAddToCart, 
  addedToCart 
}) {
  if (!selectedProduct) return null;
  
  return (
    <div className="product-detail-container">
      <div className="product-detail-left">
        <img 
          src={selectedProduct.image} 
          alt={selectedProduct.name} 
          className="product-detail-image" 
        />
      </div>
      <div className="product-detail-right">
        <h3 className="product-detail-name">{selectedProduct.name}</h3>
        <p className="product-detail-description">
          {selectedProduct.description || 'No description available.'}
        </p>
        <p className="product-detail-price">${selectedProduct.price}</p>
        <div className="product-detail-actions">
          <div className="quantity-controls">
            <button className="quantity-button" onClick={decreaseQuantity}>-</button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-button" onClick={increaseQuantity}>+</button>
          </div>
          <button 
            className={`add-to-cart-button ${addedToCart ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default { ProductGrid, ProductDetail };