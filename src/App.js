import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products/Products";
// import Footer from "./Components/Footer/Footer";
import PageNotFound from "./PageNotFound";
import Product from "./Pages/Product/Product";
import CartItems from "./Pages/CartItems/CartItems";
import Summary from "./Pages/Summary/Summary";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cartItems" element={<CartItems />} />
            <Route path="/order" element={<Summary />} />
            <Route path="*" Component={PageNotFound}/>
          </Routes>
        </main>
        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
