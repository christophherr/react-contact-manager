import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {props.branding}
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span className="fas fa-home mr-1" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <span className="fas fa-plus mr-1" />
                  Add Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <span className="fas fa-question mr-1" />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  branding: 'The best contact manager on the market.'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
