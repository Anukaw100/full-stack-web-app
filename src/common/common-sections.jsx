import React from "react";

import "Common/common-sections.css";
import Logo from "Images/logo.gif";

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  openSideBar() {
    document.getElementById('sidebar-toggle').classList.toggle('collapsed')
  }

  render() {
    return (
      <header>  
        <nav className="mainnav">
            <a className="logo" href="/"> 
              <img src={Logo}/>
            </a>
          <ol className="mainnav-list">
            <li><a href="/state-of-parking/">State of Parking</a></li>
            <li><a href="/why-ai/">Why A.I?</a></li>
            <li><a href="/product/">Product</a></li>
          </ol>
          <li className="loginicon"><a href="/login/">Login</a></li>
        </nav>
        
        <div className="sidebar-div">
          <button title="Toggle sidebar" onClick={this.openSideBar}></button>
          <nav id="sidebar-toggle" className="sidebar-nav collapsed">
            <ol className="sidebar-list">
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
        <ol className="footer-list">
          <li><a href="https://github.com/Anukaw100/parking-detection-ml-website">GitHub</a></li>
          <li>Contact Us</li>
        </ol>
      </footer>
    );
  }
}
