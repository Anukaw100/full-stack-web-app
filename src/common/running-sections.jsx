import React from "react";

import "Common/running-sections.css";
import Logo from "Images/logo.gif";

export class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  openSideBar() {
    document.getElementById('sidebar-nav').classList.toggle('collapsed')
  }

  render() {
    return (
      <header>  
        <nav class="mainnav">
            <a class="logo" href="/"> 
              <img src={Logo}/>
            </a>
          <ol class="mainnav-list">
            <li><a href="/state-of-parking/">State of Parking</a></li>
            <li><a href="/why-ai/">Why A.I?</a></li>
            <li><a href="/product/">Product</a></li>
          </ol>
          <li class="loginicon"><a href="/login/">Login</a></li>
        </nav>
        
        <div class="sidebar-div">
          <button title="Toggle sidebar" onClick={this.openSideBar}></button>
          <nav id="sidebar-nav" class="collapsed">
            <ol class="sidebar-list">
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
        <ol class="footer-list">
          <li><a href="https://github.com/Anukaw100/parking-detection-ml-website">GitHub</a></li>
          <li>Contact Us</li>
        </ol>
      </footer>
    );
  }
}
