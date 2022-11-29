import "./App.css";
import { AddTodos } from "./Components/AddTodos";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div>
      <Counter />
      <AddTodos />
    </div>
  );
};

export default App;
