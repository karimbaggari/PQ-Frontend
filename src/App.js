import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Security from "./pages/Security";
import Cloud from "./pages/Cloud";
import Speed from "./pages/Speed";
import Support from "./pages/Support";
import Maintenance from "./pages/Maintenance";
import Growth from "./pages/Growth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/security" element={<Security />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/speed" element={<Speed />} />
        <Route path="/support" element={<Support />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
