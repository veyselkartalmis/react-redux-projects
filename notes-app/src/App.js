import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import NoteList from "./components/NoteList/NoteList";

function App() {
  return (
    <div className="app">
      <div className="form">
        <Form />
      </div>
      <div className="filter">
        <Filter />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
