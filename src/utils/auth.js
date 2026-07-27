export const isAuthenticated = () => {
  return (
    localStorage.getItem("token") !== "undefined" &&
    localStorage.getItem("token")
  );
};
