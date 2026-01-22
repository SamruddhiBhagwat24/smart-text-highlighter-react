import { Outlet, NavLink } from "react-router-dom";

function HighlighterLayout() {
  return (
    <section className="highlighter-section">
      <div className="sub-nav">
        <NavLink to="text">Highlighter</NavLink>
        <NavLink to="how-it-works">How it works</NavLink>
      </div>

      <div className="card">
        <Outlet />
      </div>
    </section>
  );
}
export default HighlighterLayout;
