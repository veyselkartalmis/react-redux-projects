import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/index";
import Detail from "./pages/Detail/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/char/:char_id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
