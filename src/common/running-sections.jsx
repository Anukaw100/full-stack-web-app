import React from "react";

import "Common/running-sections.css";
import Logo from "Images/logo.gif";

export class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <a href="/"> 
          <img className="logo" src={Logo}/>
        </a>
        <nav>
          <ol className="list">
            <li className="header-item">
              <a href="/state-of-parking/">State of Parking</a>
            </li>
            <li className="header-item">
              <a href="/why-ai/">Why A.I?</a>
            </li>
            <li className="header-item">
              <a href="/product/">Product</a>
            </li>
            <li className="header-item">
              <a href="/login/">Login</a>
            </li>
          </ol>
        </nav>
      </header>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ol className="list">
          <li><a href="https://github.com/Anukaw100/parking-detection-ml-website">GitHub</a></li>
          <li>Contact Us</li>
        </ol>
      </footer>
    );
  }
}
