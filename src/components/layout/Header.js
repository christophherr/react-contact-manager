import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {props.branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
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
