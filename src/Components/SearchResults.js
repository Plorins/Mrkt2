import React from 'react';

function SearchResults({ searchTerm, searchResults, onSearchResultClick }) {
  if (!searchResults || searchResults.length === 0) {
    return (
      <div className="no-search-results">
        <h2>No matches found for: "{searchTerm}"</h2>
        <p>Please try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2 className="section-title">Search Results for: "{searchTerm}"</h2>
      <div className="product-grid">
        {searchResults.map((result, index) => (
          <div key={index} className="product-item" onClick={() => onSearchResultClick(result)}>
            {result.product.image ? (
              <img src={result.product.image} alt={result.product.name} />
            ) : (
              <div className="product-placeholder">{result.product.name.charAt(0)}</div>
            )}
            <div>{result.product.name}</div>
            <div>${result.product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
