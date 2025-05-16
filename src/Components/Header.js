import React from 'react';

function Header({ 
  activeTab, 
  onTabChange, 
  onGoBack, 
  cartCount = 0,  // Default value to prevent undefined
  searchTerm = '', // Default value to prevent undefined
  onSearchTermChange, 
  onSearch, 
  canGoBack 
}) {
  return (
    <header className="header">
      <div className="header-left">
        <button 
          className="back-button" 
          onClick={onGoBack}
          disabled={!canGoBack}
        >
          ←
        </button>
        <h1 className="app-title">MerchXpress</h1>
      </div>
      
      <nav className="header-nav">
        <a 
          href="#" 
          className={activeTab === 'home' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault();
            onTabChange('home');
          }}
        >
          Home
        </a>
        <a 
          href="#" 
          className={activeTab === 'market' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault();
            onTabChange('market');
          }}
        >
          Market
        </a>
        <a 
          href="#" 
          className={activeTab === 'notification' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault();
            onTabChange('notification');
          }}
        >
          Notification
        </a>
        <a 
          href="#" 
          className={activeTab === 'cart' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault();
            onTabChange('cart');
          }}
        >
          Cart{cartCount > 0 ? ` (${cartCount})` : ''}
        </a>
      </nav>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search description" 
          className="search-input"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
        />
        <button className="search-button" onClick={onSearch}>Search</button>
      </div>
    </header>
  );
}

export default Header;