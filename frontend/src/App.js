import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Cart, ProductDetail, Homepage, Products } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />}/>
        <Route path='/cart' element={<Cart />}/>
        {/* <Route path='/success'>
          Checkout Success
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
