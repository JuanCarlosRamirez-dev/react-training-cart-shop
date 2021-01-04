import '../styles/App.css';
import Header from '../components/header/header';
import Filters from '../components/store-filters/filters';
import MainProducts from '../components/store-main-product/main-products';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <MainProducts />
    </div>
  );
}

export default App;
