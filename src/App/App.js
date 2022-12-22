import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "../components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
  );
}

export default App;
