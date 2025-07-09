import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Sale from "./pages/Sale";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";

const MainLayout = ({ children }) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        <Footer/>
        </>
       );
    };

    export default MainLayout;

    import { Link } from "react-router-dom";

    const Header = () => {
        return (
            <header style = {{ padding: '10px'; borderBottom: '1px solid #ccc' }}>
            <nav style={{ display: "flex", justifyContent: "space-between" }}>
             {/* Logo */}
             <Link to="/">
             <img src="logo.png" alt="Logo" style={{ height: '40px' }} />
             </Link>

             { /* Navigation Links */}
            <div style={{ display: 'flex', gap: '15px'}}>
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/products">Products</Link>
                <Link to="/sales">Sales</Link>
            </div>    
            

            { /* Basket Icon */}
            <div>
                <Link to="/cart"> <span style={{ color: 'red'}}>2</span></Link>
            </div>
            </nav>
        </header>
        
        );
    };
             



