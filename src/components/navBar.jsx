import React from "react";
//stateless funtional component
const NavBar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="_blank">
            Navbar{" "}
            <span className="badge badge-pillbadge-secondary">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
