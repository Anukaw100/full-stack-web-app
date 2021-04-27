import React from "react";
import Logo from "Images/logo.gif";
import "Common/common-sections.css";

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  openSideBar() {
    document.getElementById('sidebar-menu').classList.toggle('collapsed')
  }

  render() {
    return (
      <header>
        <nav className="nav-menu">
          <a className="logo" href="/"><img src={Logo}/></a>
          <ol className="list">
            {/* TODO Add <li> for homepage. */}
            <li><a href="/state-of-parking/">State of Parking</a></li>
            <li><a href="/why-ai/">Why A.I?</a></li>
            <li><a href="/product/">Product</a></li>
          </ol>
          {/* FIXME Change span dynamically in login pages to back button. */}
          <span className="login-nav-item"><a href="/login/">Login</a></span>
        </nav>

        <div className="sidebar">
          <button title="Toggle Sidebar" onClick={this.openSideBar}></button>
          <nav id="sidebar-menu" className="collapsed">
            <ol className="list">
              <li><a href="/state-of-parking/">State of Parking</a></li>
              <li><a href="/why-ai/">Why A.I?</a></li>
              <li><a href="/product/">Product</a></li>
              <li><a href="/login/">Login</a></li>
            </ol>
          </nav>
        </div>
      </header>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ol className="list">
          <li>
            <a href="https://github.com/Anukaw100/parking-detection-ml-website">
              GitHub
            </a>
          </li>
          <li><a href="/contact/">Contact Us</a></li>
        </ol>
      </footer>
    );
  }
}
