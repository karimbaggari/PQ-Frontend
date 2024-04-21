import { BrowserRouter } from "react-router-dom";
import {
  Header,
  Navbar,
  StarsCanvas,
} from "./components";
function App() {
  return (
    <BrowserRouter> 
      <div className="relative z-0 bg-primary">
        <Navbar />
        <StarsCanvas />
        <div className="relative z-0">
          <Header />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
