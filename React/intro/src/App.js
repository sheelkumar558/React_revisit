
import './App.css';
import { Props } from './Components/Props';

function App() {
  
  return (
    <div className="App">
     <Props>child!</Props>
      <Props hello={"hello"} />
    </div>
  );
}

export default App;
