import React from "react";

import "Common/running-sections.css";
import Logo from "Images/logo.gif";

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  openSideBar() {
    document.getElementById('sidebar').classList.toggle('collapsed')
  }

  render() {
    return (
      <header>
        <a className="logo" href="/"><img src={Logo} /></a>
        <nav id="navigation" className="list">
          <ol>
            <li><a href="/state-of-parking/">State of Parking</a></li>
            <li><a href="/why-ai/">Why A.I?</a></li>
            <li><a href="/product/">Product</a></li>
            <li className="loginButton"><a href="/login/">Login</a></li>
          </ol>

          <div id="sidebar" className="collapsed" />
          <button title="Toggle Sidebar" onClick={this.openSideBar} />
        </nav>
      </header>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <nav className="list">
          <ol>
            <li>
              <a href="https://github.com/Anukaw100/parking-detection-ml-website">
                GitHub
              </a>
            </li>
            <li><a href="/contact/">Contact Us</a></li>
          </ol>
        </nav>
      </footer>
    );
  }
}
