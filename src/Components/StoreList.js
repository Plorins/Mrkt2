import React from 'react';

// Utility function to format numbers with K
const formatNumberWithK = (number) => number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number;

function StoreList({ stores, onStoreClick, formatNumberWithK }) {
  return (
    <div className="store-list">
      {stores.map(store => (
        <div key={store.id} className="store-item" onClick={() => onStoreClick(store.id)}>
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
      ))}
    </div>
  );
}

// Home Page Component
export function HomePage() {
  return (
    <div className="store-list">
      <div className="page-placeholder">Home Page - Welcome to MerchXpress!</div>
    </div>
  );
}

// Search Results Component
export function SearchResults({ searchTerm, searchResults, handleSearchResultClick }) {
  return (
    <div className="search-results">
      <h2 className="section-title">Search Results for: "{searchTerm}"</h2>
      <div className="search-results-list">
        {searchResults.map((result, index) => (
          <div key={index} className="search-result-item" onClick={() => handleSearchResultClick(result)}>
            <div className="search-result-image">
              {result.product.image ? (
                <img src={result.product.image} alt={result.product.name} />
              ) : (
                <div className="search-result-placeholder">{result.product.name.charAt(0)}</div>
              )}
            </div>
            <div className="search-result-details">
              <h3>{result.product.name}</h3>
              <p>{result.product.description}</p>
              <p className="search-result-price">${result.product.price}</p>
              <p className="search-result-store">From: {result.storeName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// No Search Results Component
export function NoSearchResults({ searchTerm }) {
  return (
    <div className="no-search-results">
      <h2>No matches found for: "{searchTerm}"</h2>
      <p>Please try a different search term.</p>
    </div>
  );
}

export default StoreList;