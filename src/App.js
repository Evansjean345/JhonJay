import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Direct from './routes/Direct';
import Tv from './routes/Tv';
import Young from './routes/Young';

function App() {
  return (
    <div className="App bg-white">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/direct" element={<Direct />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/young" element={<Young />} />
      </Routes>
    </div>
  );
}

export default App;
