import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";
import { ToastContainer } from "react-toastify";
import { SocketProvider } from "./context/SocketContext";
import { LoaderProvider } from "./context/LoaderContext";
import Loader from "./componants/Loader";

const App = () => {
  return (
    <LoaderProvider>
      <SocketProvider>
        <BrowserRouter>
          <Loader />
          <ToastContainer />
          <AppRoutes />
        </BrowserRouter>
      </SocketProvider>
    </LoaderProvider>
  );
};

export default App;
