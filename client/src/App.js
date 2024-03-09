import AllRoutes from "./AllRoutes";
import "./App.css";
import { Navbar } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App relative">
      <Navbar />
      <AllRoutes />
      <ToastContainer className="font-semibold text-left" />
    </div>
  );
}

export default App;
