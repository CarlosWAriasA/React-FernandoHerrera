import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Associations
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={(args) =>
              `nav-item nav-link ${args.isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={(args) =>
              `nav-item nav-link ${args.isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Carlos</span>
          <button className="nav-item nav-link btn">Logout</button>
        </ul>
      </div>
    </nav>
  );
};
