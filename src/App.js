import './styles/style.css';
import 'animate.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Nosotros from './components/nosotros/Nosotros';
import Cart from './components/cart/Cart';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer titulo="Tacos Regios" slogan="El sabor del Norte"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer titulo="Tacos Regios" slogan="El sabor del Norte"/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;