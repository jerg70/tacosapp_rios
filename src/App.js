import './styles/style.css';
import 'animate.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Form from './components/form/Form';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Nosotros from './components/nosotros/Nosotros';
import CartProvider from './components/context/CartContext';
import Cart from './components/cart/Cart';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer titulo="Tacos Regios" slogan="El sabor del Norte"/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer titulo="Tacos Regios" slogan="El sabor del Norte"/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<Form />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;