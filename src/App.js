import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products/Products";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./PageNotFound";
import Product from "./Pages/Product/Product";

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
            <Route path="*" Component={PageNotFound}/>
          </Routes>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
