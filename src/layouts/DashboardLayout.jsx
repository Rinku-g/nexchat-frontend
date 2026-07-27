

import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          background: "#eee",
        }}
      >
        <Link to="/">DashHome</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>

      <footer
        style={{
          padding: "20px",
          background: "#eee",
          marginTop: "20px",
        }}
      >
        Footer
      </footer>
    </>
  );
};

export default DashboardLayout;