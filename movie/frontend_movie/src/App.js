import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Actors } from "./components/actors/Actors";
import { Movie } from "./components/movie/Movie";
import { Navbar } from "./components/nav/Navbar";
import { Producer } from "./components/producers/Producer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/producer" element={<Producer />} />
          <Route path="/actors" element={<Actors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
