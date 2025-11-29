import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./container/Header";
import { HomePage } from "./container/HomePage";
import { ElectronicsPage } from "./container/ElectronicsPage";
import { GroceriesPage } from "./container/GroceriesPage";
import { AboutPage } from "./container/AboutPage";

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
