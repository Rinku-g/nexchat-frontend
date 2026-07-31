import { FiEye } from "react-icons/fi";
import { useState } from "react";
import InputField from "./InputField";
import { Formik, Form } from "formik";
import { loginSchema, signupSchema } from "../utils";
import { apiRequest } from "../apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { socket } from "../config/socket";
import { useLoader } from "../context/LoaderContext";
import SocialLogin from "./SocialLogin";

const LoginForm = ({ tab, fields, isSignup, setTab }) => {
  const navigate = useNavigate();
  const { setLoading, loading } = useLoader();

  const signupInitialValues = {
    username: "",
    emailOrPhone: "",
    password: "",
  };

  const loginInitialValues = {
    emailOrPhone: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await apiRequest({
        url: isSignup ? "/register" : "/login",
        method: "POST",
        data: values,
      });

      if (response?.status === 200) {
        if (isSignup) {
          setTab("signin");
          toast.success(response.message, {
            autoClose: 2000,
          });
          return;
        }

        const { token, user } = response.data;

        localStorage.setItem("token", token);
        toast.success(response.message, {
          autoClose: 2000,
        });

        if (!socket.connected) {
          socket.auth = { token };
          socket.connect();
        }
        navigate("/home");
      } else if (response?.status === 400) {
        toast.warning(response.message, {
          autoClose: 2000,
        });
      } else {
        toast.error(response.message, {
          autoClose: 2000,
        });
        console.log(response.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={isSignup ? signupInitialValues : loginInitialValues}
      validationSchema={isSignup ? signupSchema : loginSchema}
      onSubmit={(values) => handleSubmit(values)}
      key={tab}
      enableReinitialize
    >
      {({ errors, touched, handleChange, values, setFieldValue }) => {
        return (
          <Form className="mt-6 space-y-6">
            {fields.map((field, index) => {

              
              return (
                <div key={index}>
                  <InputField
                    key={field.name}
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    handleChange={handleChange}
                    // maxLength={field.type}
                  />
                </div>
              );
            })}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl py-2 text-white mt-2 transition bg-linear-to-r from-violet-500 to-indigo-600 hover:opacity-90 cursor-pointer"
            >
              {isSignup ? "Create Account" : "Sign In"}
            </button>

            <div className="center w-full">{!isSignup && <SocialLogin />}</div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
