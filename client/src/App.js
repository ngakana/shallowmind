import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Models from "./pages/Models";
import ModelDetails from "./pages/ModelDetails";
import NotFound from "./pages/NotFound";

import { ModelsProvider } from "./contexts/ModelsContext";

const queryClient = new QueryClient();

function App() {
  return (
    <div 
    className="
      relative
      max-h-screen w-screen bg-slate-900
      flex flex-col
    ">
      <QueryClientProvider client={queryClient}>
        <ModelsProvider>
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
            {/* <ReactQueryDevtools /> */}
          </Router>   
        </ModelsProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
