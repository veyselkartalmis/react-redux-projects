import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Receipt from './components/Receipt/Receipt';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
