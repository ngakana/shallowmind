import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Models from "./pages/Models";
import ModelDetails from "./pages/ModelDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div 
    className="
      relative
      max-h-screen w-screen bg-slate-900
      flex flex-col
    ">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:id" element={<ModelDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>   
    </div>
  );
}

export default App;
