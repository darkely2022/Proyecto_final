import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarprin from './layout/Navbarprin';
import Header from './layout/Header';
import Home from './pages/Home';
import Registro from './pages/Registro'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "react-bootstrap/Button"; // Importamos el componente

function App() {
  return (
    <div>
     { /* Utilizamos elcomponente */ }
     <BrowserRouter>         
          <Header />
          <Navbarprin/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/registro" element={<Registro/>} />
            { /*<Route path="/pizza/:id" element={<VerPizza />} />>*/ }
             { /*<Route path="/carrito" element={<Carrito />} />>*/ }
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
