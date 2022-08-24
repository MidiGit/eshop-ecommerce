import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, Footer } from "./components";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
import { Home, Contact, Login, Register, Reset, Admin } from "./pages";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import CheckoutDetails from "./pages/checkout/CheckoutDetails";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import NotFound from "./pages/notFound/NotFound";
import OrderDetails from "./pages/orderDetails.js/OrderDetails";
import OrderHistory from "./pages/orderHistory/OrderHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          ></Route>
          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout-details" element={<CheckoutDetails />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/checkout-success" element={<CheckoutSuccess />}></Route>
          <Route path="/order-history" element={<OrderHistory />}></Route>
          <Route path="/order-details/:id" element={<OrderDetails />}></Route>
          <Route
            path="/review-product/:id"
            element={<ReviewProducts />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
