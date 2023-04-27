import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatGalery from './pages/catImagesApi';
import './global.css'
import Cats from './pages/cats';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";     
import Home from './pages/home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<CatGalery />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;