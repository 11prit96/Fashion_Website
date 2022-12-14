import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import Men from './pages/Men';
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app_background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
