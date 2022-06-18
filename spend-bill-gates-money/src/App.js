import "./index.scss";
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Receipt from './components/Receipt/Receipt';

function App() {
  return (
    <div className='app-wrap'>
      <Navbar />
      <Card />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
