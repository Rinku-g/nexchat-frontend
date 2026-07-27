import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";
import { ToastContainer } from "react-toastify";
import { SocketProvider } from "./context/SocketContext";

const App = () => {
  return (
    <SocketProvider>
      <BrowserRouter>
        <ToastContainer />
        <AppRoutes />
      </BrowserRouter>
    </SocketProvider>
  );
};

export default App;
