import React from "react";
import { Link, NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={(args) => {
                return `nav-link ${args.isActive ? "active" : ""}`;
              }}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={(args) => {
                return `nav-link ${args.isActive ? "active" : ""}`;
              }}
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className={(args) => {
                return `nav-link ${args.isActive ? "active" : ""}`;
              }}
              to={"/login"}
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
