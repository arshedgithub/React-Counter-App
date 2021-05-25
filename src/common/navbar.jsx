import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Counters
          <span className="badge rounded-pill bg-primary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
