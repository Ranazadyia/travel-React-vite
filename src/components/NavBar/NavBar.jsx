import './NavBarStyle.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ menu, btn }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <img src="./src/assets/img/logo.png" alt="logo" className="logo" />
      <ul className={`nav-menu ${openMenu ? 'active' : ''}`}>
        {menu.map((element, index) => (
          <li key={index}>
            <NavLink
              to={element.path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid #DF6951' : 'none',
                paddingBottom: '3px',
              })}
              className='Nav-Link'
            >
              {element.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="nav-btn">{btn}</button>
      <button className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sidebar ${openMenu ? 'open' : ''}`}>
        <button className="close-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul>
          {menu.map((element, index) => (
            <li key={index}>
              <NavLink
                to={element.path}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  borderBottom: isActive ? '2px solid #DF6951' : 'none',
                  paddingBottom: '3px',
                })}
                className='Nav-Link'
              >
                {element.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="side-btn">{btn}</button>
      </div>
    </nav>
  );
};

export default NavBar;
