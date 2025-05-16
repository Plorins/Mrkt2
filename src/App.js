import React, { useState } from 'react';
import Header from './Components/Header';
import StoreList from './Components/StoreList';
import StoreView from './Components/StoreView';
import Cart from './Components/Cart';
import images from './ImgSrcs';
import './App.css';

function App() {
  // State for navigation and user selections
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noSearchResults, setNoSearchResults] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState([]);

  // Store data
  const stores = [
    {
      id: 1,
      name: "Marielle's SodaHouse",
      owner: "Marielle",
      products: 5000,
      image: images.Cokehouse,
      productsList: [
        { id: 1, image: images.Coke, name: "Coke", price: 1.5, description: "Refreshing soda." },
        { id: 2, image: images.ppsi, name: "Pepsi", price: 1.5, description: "Classic cola alternative." },
        { id: 3, image: images.Sprt, name: "Sprite", price: 1.5, description: "Lemon-lime refreshment." },
        { id: 4, image: images.Fanta, name: "Fanta", price: 1.5, description: "Orange flavored soda." },
        { id: 5, image: images.DrPpr, name: "Dr Pepper", price: 1.5, description: "23 flavors blended into one." },
        { id: 6, image: images.MtDew, name: "Mountain Dew", price: 1.5, description: "Citrus flavored soda." },
        { id: 7, image: images.SvnUp, name: "7UP", price: 1.5, description: "Crisp lemon-lime soda." },
        { id: 8, image: images.SraMst, name: "Sierra Mist", price: 1.5, description: "Refreshing lemon-lime taste." },
        { id: 9, image: images.RtBr, name: "Root Beer", price: 1.5, description: "Classic root beer flavor." },
        { id: 10, image: images.GngrAle, name: "Ginger Ale", price: 1.5, description: "Soothing ginger flavor." }
      ],
      rating: 10000
    },
    {
      id: 2,
      name: "DenSlay Fits",
      owner: "Denzey",
      products: 1500,
      image: images.Denslayfts,
      rating: 9500,
      productsList: [
        { id: 1, image: images.SexyMesh, name: "Sexy Mesh Dress", price: 250, description: "Sexy padded mesh dress with chain and pink gem from lock, thick boob cover, high quality mesh." },
        { id: 2, image: images.FauxFurCrdgn, name: "Faux fur cardigan", price: 85, description: "Warm and stylish faux fur cardigan for cold days." },
        { id: 3, image: images.KnittedCrdgn, name: "Knitted Oversize Cardigan", price: 85, description: "Comfortable oversized knitted cardigan, perfect for layering." },
        { id: 4, image: images.Y2kDnmSkrt, name: "y2k denim mini skirt", price: 25, description: "Trendy Y2K style denim mini skirt, vintage inspired." },
        { id: 5, image: images.Y2kDnmSkrt2, name: "Denim mini skirt", price: 25, description: "Classic denim mini skirt, versatile for any outfit." },
        { id: 6, image: images.SatinPolo, name: "Satin long sleeves for women", price: 35, description: "Elegant satin long sleeve polo, smooth and comfortable." },
        { id: 7, image: images.Pants1, name: "Formal slacks for women", price: 259, description: "Professional formal slacks, perfect for office wear." },
        { id: 8, image: images.Pants2, name: "Formal semi-flare slacks for women", price: 300, description: "Stylish semi-flare formal slacks with modern fit." },
        { id: 9, image: images.rddress, name: "Red Date Night Dress", price: 480, description: "Stunning red dress perfect for special occasions." },
        { id: 10, image: images.YllowDress, name: "Yellow Sundress", price: 200, description: "Bright yellow sundress, perfect for summer days." },
        { id: 11, image: images.Dress, name: "Coquette Picnic Dress", price: 289, description: "Cute coquette style dress, ideal for picnics and outdoor events." },
        { id: 12, image: images.bikini1, name: "Tropical Theme Bikini", price: 350, description: "Vibrant tropical print bikini for beach days." },
        { id: 13, image: images.bikini2, name: "Elegant White Bikini", price: 350, description: "Sophisticated white bikini with elegant details." }
      ]
    },
    {
      id: 3,
      name: "Diana's Bookstore",
      owner: "Diana",
      products: 20000,
      image: images.BkStore,
      rating: 10000,
      productsList: []
    },
    {
      id: 4,
      name: "Pierre's General Store",
      owner: "Pierre",
      products: 900,
      image: images.GenStore,
      rating: 9900,
      productsList: []
    },
    {
      id: 5,
      name: "Stardrop Saloon",
      owner: "Gus",
      products: 950,
      image: images.Saloon,
      rating: 10000,
      productsList: []
    },
    {
      id: 6,
      name: "Black Market",
      owner: "Ayame",
      products: 2500,
      rating: 9000,
      image: images.BlkMrkt,
      productsList: []
    },
    {
      id: 7,
      name: " WorkShop",
      owner: "Akio",
      products: 1500,
      rating: 9500,
      image: images.WrkShp,
      productsList: []
    },
    {
      id: 8,
      name: "Moonmart",
      owner: "Uta",
      products: 695,
      rating: 5000,
      image: images.Moonmart,
      productsList: []
    },
    {
      id: 9,
      name: "Luminous Vault",
      owner: "Agil",
      products: 6000,
      rating: 9900,
      image: images.LuminousVault,
      productsList: []
    },
    {
      id: 10,
      name: "Moonflower",
      owner: "Sakamoto",
      products: 702,
      rating: 2500,
      image: images.MnFlwr,
      productsList: []
    }
  ];

  // Navigation handlers
  const handleStoreClick = (storeId) => {
    // Save current state to navigation history before changing
    if (selectedProduct) {
      setNavigationHistory([...navigationHistory, { type: 'product', store: selectedStore, product: selectedProduct }]);
    } else if (selectedStore) {
      setNavigationHistory([...navigationHistory, { type: 'store', store: selectedStore }]);
    } else if (isSearchActive) {
      setNavigationHistory([...navigationHistory, { type: 'search', results: searchResults }]);
    }
    
    const store = stores.find(store => store.id === storeId);
    setSelectedStore(store);
    setSelectedProduct(null);
    setIsSearchActive(false);
    // Don't change active tab - keep the current tab active
  };

  const handleProductClick = (productId) => {
    if (!selectedStore?.productsList) return;
    
    // Save current state to navigation history
    if (selectedProduct) {
      setNavigationHistory([...navigationHistory, { type: 'product', store: selectedStore, product: selectedProduct }]);
    } else if (isSearchActive) {
      setNavigationHistory([...navigationHistory, { type: 'search', results: searchResults }]);
    } else {
      setNavigationHistory([...navigationHistory, { type: 'store', store: selectedStore }]);
    }
    
    const product = selectedStore.productsList.find(p => p.id === productId);
    setSelectedProduct(product);
    setQuantity(1);
    setIsSearchActive(false);
  };

  const handleGoBack = () => {
    // If we're showing search results, go back to previous state
    if (isSearchActive) {
      setIsSearchActive(false);
      setSearchResults([]);
      setNoSearchResults(false);
      
      // Check if we have history to restore
      if (navigationHistory.length > 0) {
        const lastState = navigationHistory.pop();
        setNavigationHistory([...navigationHistory]);
        
        if (lastState.type === 'product') {
          setSelectedStore(lastState.store);
          setSelectedProduct(lastState.product);
        } else if (lastState.type === 'store') {
          setSelectedStore(lastState.store);
          setSelectedProduct(null);
        } else {
          setSelectedStore(null);
          setSelectedProduct(null);
        }
      }
      return;
    }
    
    // If we're showing a product, go back to store
    if (selectedProduct) {
      setSelectedProduct(null);
      return;
    }
    
    // If we're showing a store, go back to previous state
    if (selectedStore) {
      // Check if we have history to restore
      if (navigationHistory.length > 0) {
        const lastState = navigationHistory.pop();
        setNavigationHistory([...navigationHistory]);
        
        if (lastState.type === 'store') {
          setSelectedStore(lastState.store);
        } else if (lastState.type === 'product') {
          setSelectedStore(lastState.store);
          setSelectedProduct(lastState.product);
        } else if (lastState.type === 'search') {
          setIsSearchActive(true);
          setSearchResults(lastState.results);
          setSelectedStore(null);
        } else {
          setSelectedStore(null);
        }
      } else {
        setSelectedStore(null);
      }
    }
  };

  // Cart handlers
  const handleAddToCart = (product, qty) => {
    if (!product) return;
    
    const newItem = {
      storeId: selectedStore.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
      image: product.image
    };
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(
      item => item.storeId === newItem.storeId && item.productId === newItem.productId
    );
    
    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += qty;
      setCart(updatedCart);
    } else {
      // Add new item if it doesn't exist
      setCart([...cart, newItem]);
    }
    
    //"Added to Cart" effect
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2500);
  };

  const handleCheckout = () => {
    // Process checkout
    setCheckoutComplete(true);
    
    // Clear cart after successful checkout
    setTimeout(() => {
      setCart([]);
      setCheckoutComplete(false);
    }, 3000);
  };

  // Search handler
  const handleSearch = () => {
    // If no search term, just return
    if (!searchTerm.trim()) return;
    
    // Save current state to navigation history
    if (selectedProduct) {
      setNavigationHistory([...navigationHistory, { type: 'product', store: selectedStore, product: selectedProduct }]);
    } else if (selectedStore) {
      setNavigationHistory([...navigationHistory, { type: 'store', store: selectedStore }]);
    } else if (isSearchActive) {
      setNavigationHistory([...navigationHistory, { type: 'search', results: searchResults }]);
    }
    
    // Reset search state
    setNoSearchResults(false);
    setSearchResults([]);
    
    // Create array to hold search results
    let results = [];
    
    // If on home page with no store selected, search across all stores
    if ((activeTab === 'home' && !selectedStore) || activeTab === 'market') {
      // Search across all stores
      stores.forEach(store => {
        const matchingProducts = store.productsList?.filter(product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          product.description?.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];
        
        // Add matching products to results
        matchingProducts.forEach(product => {
          results.push({
            storeId: store.id,
            storeName: store.name,
            storeImage: store.image,
            product
          });
        });
      });
    }
    // If store is selected, search within that store's products
    else if (selectedStore) {
      const matchingProducts = selectedStore.productsList?.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];
      
      // Add matching products to results
      matchingProducts.forEach(product => {
        results.push({
          storeId: selectedStore.id,
          storeName: selectedStore.name,
          storeImage: selectedStore.image,
          product
        });
      });
    }
    
    // Check if we found any results
    if (results.length > 0) {
      setSearchResults(results);
      setIsSearchActive(true);
      // Deselect the current product and store
      setSelectedProduct(null);
      setSelectedStore(null);
    } else {
      setNoSearchResults(true);
    }
  };

  const handleSearchResultClick = (result) => {
    const store = stores.find(s => s.id === result.storeId);
    setSelectedStore(store);
    setSelectedProduct(result.product);
    setIsSearchActive(false);
    setQuantity(1);
  };

  // Change tab handler
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Format numbers with k for thousands
  const formatNumberWithK = (number) => number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number;

  // Render home page
  const renderHomePage = () => {
    return (
      <div className="page-placeholder">Home Page - Welcome to MerchXpress!</div>
    );
  };

  // Render search results
  const renderSearchResults = () => {
    if (!isSearchActive) return null;
    
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
  };

  // Render main content
  const renderMainContent = () => {
    if (isSearchActive) {
      return renderSearchResults();
    }
    
    if (noSearchResults) {
      return (
        <div className="no-search-results">
          <h2>No matches found for: "{searchTerm}"</h2>
          <p>Please try a different search term.</p>
        </div>
      );
    }
    
    switch (activeTab) {
      case 'home':
        return selectedStore ? (
          <StoreView 
            store={selectedStore}
            selectedProduct={selectedProduct}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            addedToCart={addedToCart}
            formatNumberWithK={formatNumberWithK}
          />
        ) : renderHomePage();
      
      case 'cart':
        return (
          <Cart 
            cart={cart} 
            onCheckout={handleCheckout} 
            checkoutComplete={checkoutComplete} 
          />
        );
      
      case 'market':
        if (selectedStore) {
          return (
            <StoreView 
              store={selectedStore}
              selectedProduct={selectedProduct}
              onProductClick={handleProductClick}
              onAddToCart={handleAddToCart}
              addedToCart={addedToCart}
              formatNumberWithK={formatNumberWithK}
            />
          );
        } else {
          return (
            <StoreList 
              stores={stores} 
              onStoreClick={handleStoreClick} 
              formatNumberWithK={formatNumberWithK} 
            />
          );
        }
      
      case 'notification':
        return <div className="page-placeholder">Notifications Coming Soon</div>;
      
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="app">
      <Header 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onGoBack={handleGoBack}
        cartCount={cart.length}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
        canGoBack={!!selectedStore || !!selectedProduct || isSearchActive}
      />
      
      <main className="content">
        {renderMainContent()}
      </main>
    </div>
  );
}

export default App;