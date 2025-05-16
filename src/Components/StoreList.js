import React from 'react';

function StoreList({ stores, onStoreClick, formatNumberWithK }) {
  return (
    <div className="store-list">
      <h2 className="section-title">Popular Stores</h2>
      <div className="stores-grid">
        {stores.map(store => (
          <div 
            key={store.id} 
            className="store-card"
            onClick={() => onStoreClick(store.id)}
          >
            <div className="store-image">
              {store.image ? (
                <img src={store.image} alt={store.name} />
              ) : (
                <div className="store-placeholder">{store.name.charAt(0)}</div>
              )}
            </div>
            <div className="store-details">
              <h3>{store.name}</h3>
              <p>Owner: {store.owner}</p>
              <p>Products: {formatNumberWithK(store.products)}</p>
              <p>Rating: {formatNumberWithK(store.rating)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreList;