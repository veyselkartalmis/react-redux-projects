import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Contacts from "./components/Contacts/index";
import Edit from "./components/Contacts/Edit";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Contacts />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
