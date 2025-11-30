import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./container/header/Header";
import { HomePage } from "./container/home/HomePage";
import { ElectronicsPage } from "./container/electronics/ElectronicsPage";
import { GroceriesPage } from "./container/groceries/GroceriesPage";
import { AboutPage } from "./container/about/AboutPage";
import { ProductDetails } from "./container/product-details/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/home/:id" element={<ProductDetails/>}/>
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/groceries" element={<GroceriesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
