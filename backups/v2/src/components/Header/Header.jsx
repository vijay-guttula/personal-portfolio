import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid navbarContainer'>
        <Link className='navbar-brand' to='/'>
          Vijay Guttula <span>/ SDE Intern</span>
        </Link>

        <div id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/'>
                About me
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/resume'>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
