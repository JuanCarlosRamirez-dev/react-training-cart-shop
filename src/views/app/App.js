import '../styles/App.css';
import Header from '../components/header/header';
import Filters from '../components/store-filters/filters';
import MainProducts from '../components/store-main-product/main-products';
import Cart from '../components/store-cart-detail/cart';
import ItemPage from '../components/store-product-detail/item-page';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Filters />
      <MainProducts />
      <Cart /> */}
      <ItemPage />
    </div>
  );
}

export default App;
