import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar () {
  return(
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTrckr</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
            <Link to="/users" className="nav-link">List Users</Link>
          </li>
        </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
};

export default Navbar;