import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import AnimatedRoutes from "../components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
