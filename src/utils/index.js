import * as Yup from "yup";

export const loginSchema = Yup.object({
  emailOrPhone: Yup.string().required("User name is required"),
  password: Yup.string().required("Password is required"),
});

export const signupSchema = Yup.object({
  username: Yup.string().required("User name is required"),
  password: Yup.string().required("Password is required"),
  emailOrPhone: Yup.string().required("email or phone number is required"),
});

export const formatTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
