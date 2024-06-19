import './Header.scss'
// import React from "react";
import intro from '../assets/bg-pattern-intro-desktop.svg'

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${intro})`, backgroundSize: 'stretch', backgroundPosition: 'center' }} className='first'>
      <div className="header-main">
        <div className="nav-bar">
          <img src="src\assets\logo.svg" alt="logo" />
          <div className="nav-links">
            <ul>
              <li>Product</li>
              <li>Company</li>
              <li>Connect</li>
            </ul>
          </div>
        </div>

        <div className="auth">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>

      <div className='startUp'>
        <div className="intro">
          <p className='publishing'>A modern publishing platform</p>
          <p className='grow'>Grow your audience and build your online brand</p>
        </div>

        <div className="start">
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </div>

    </div>
  );
};

export default Header;
