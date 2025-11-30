import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./container/header/Header";
import { HomePage } from "./container/home/HomePage";
import { ElectronicsPage } from "./container/electronics/ElectronicsPage";
import { GroceriesPage } from "./container/groceries/GroceriesPage";
import { AboutPage } from "./container/about/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/groceries" element={<GroceriesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
