import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "12px", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/dashboard/highlighter" style={{ marginRight: "15px" }}>
        Highlighter
      </NavLink>

      <NavLink to="/dashboard/about" style={{ marginRight: "15px" }}>
        About
      </NavLink>

      <NavLink to="/dashboard/help">
        Help
      </NavLink>
    </nav>
  );
}

export default Navbar;
