import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import Home from "./pages/Home/index";
import Detail from "./pages/Detail/index";
import Quotes from "./pages/Quotes/index";

import "./index.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">Characters</Link>
        <Link to="quotes">Quotes</Link>
      </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/char/:char_id" element={<Detail />}></Route>
          <Route path="/quotes" element={<Quotes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
