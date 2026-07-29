import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";
import { ToastContainer } from "react-toastify";
import { SocketProvider } from "./context/SocketContext";
import { LoaderProvider } from "./context/LoaderContext";
import Loader from "./componants/Loader";
import { GoogleOAuthProvider } from "@react-oauth/google";


const App = () => {
  const authClientId = import.meta.env.VITE_AUTH_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={authClientId}>
    <LoaderProvider>
      <SocketProvider>
        <BrowserRouter>
          <Loader />
          <ToastContainer />
          <AppRoutes />
        </BrowserRouter>
      </SocketProvider>
    </LoaderProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
