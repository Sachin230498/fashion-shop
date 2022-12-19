import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import Navbar from "./Routes/Navbar";
import { login } from "./redux/Auth/action";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
