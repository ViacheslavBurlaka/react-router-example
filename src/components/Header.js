import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <nav className="Nav">
          <Link to="/">Home</Link>
          <Link to="/login/">Login</Link>
          <Link to="/secret">Secret</Link>
          <Link to="/users">Users</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
