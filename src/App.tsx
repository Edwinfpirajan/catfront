import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CatApi } from './pages/CatApi';
import './global.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cat" element={<CatApi />} />
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