import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatGalery from './pages/catImagesApi';
import './global.css'
import Cats from './pages/cats';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";     


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/images" element={<CatGalery />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
  // return (
  //   <h1 className="text-3xl font-bold underline">
  //     Hello world!
  //   </h1>
  // )
}

export default App;