import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products/Products";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./PageNotFound";

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
