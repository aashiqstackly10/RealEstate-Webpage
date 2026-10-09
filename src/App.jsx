import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Properties */}
        <Route path="/properties" element={<Properties />} />

        
        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        
        <Route path="/agents" element={<Agents />} />

        
        <Route
          path="/agent/:id"
          element={<AgentDetails />}
        />

        
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />       
        
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;