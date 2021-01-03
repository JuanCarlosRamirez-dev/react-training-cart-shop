import '../styles/App.css';
import Header from '../components/header/header';
import Filters from '../components/store-filters/filters';
import MainProduct from '../components/store-main-product/MainProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <MainProduct />
    </div>
  );
}

export default App;
