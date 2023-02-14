import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Cart,
  ProductDetail,
  Homepage,
  Products,
  ProductList,
  Success,
  PageNotFound,
  Checkout
} from "./pages";
import { Navbar, Footer } from "./components";
import EmailAgent from "./pages/Products/components/ShopAndChat/EmailAgent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />}/>
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/send" element={<EmailAgent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
