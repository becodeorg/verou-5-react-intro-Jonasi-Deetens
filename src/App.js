import AddToDoForm from "./components/AddToDoForm";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      < Header />
      < AddToDoForm />
      <hr/>
      < TodoList />
    </div>
  );
}

export default App;
