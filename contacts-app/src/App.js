import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Contacts from "./components/Contacts/index";
import Edit from "./components/Contacts/Edit";

function App() {
  return (
    <div className="App">
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Contacts />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
