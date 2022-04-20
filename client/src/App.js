import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Model from "./pages/Model";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="
      max-h-screen w-screen bg-slate-900
      flex flex-col
    ">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/models/:id" element={<Model />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>   
    </div>
  );
}

export default App;
