import '../styles/App.css';
import Header from './views/components/header/header';
import Filters from './views/components/store-filters/filters';
import MainProducts from './views/components/store-main-product/main-products';
import Cart from './views/components/store-cart-detail/cart';
import ItemPage from './views/components/store-product-detail/item-page';

function App() {
  return (
    <div className="App">
      <Header />
      {/*<Filters />
      <MainProducts /> 
      <Cart />*/}
      <ItemPage />
    </div>
  );
}

export default App;
