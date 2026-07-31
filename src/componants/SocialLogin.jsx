import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { apiRequest } from "../apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const response = await apiRequest({
        url: "/google-login",
        method: "POST",
        data: {
          token: credentialResponse.credential,
        },
      });

      console.log(response);

      if (!response) {
        console.log("apiRequest returned null");
        return;
      }

      if (response?.status === 200) {
        navigate("/home");
        localStorage.setItem("token", response.data.token);
        toast.success(response.message, {
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className="w-full">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        width="100%"
        text="signin_with"
        shape="rectangular"
        theme="outline"
        size="large"
        logo_alignment="left"
      />
    </div>
  );
};

export default SocialLogin;
