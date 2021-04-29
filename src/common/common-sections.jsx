import React from "react";
import Logo from "Images/logo.gif";
import "Common/common-sections.css";

export function Header(props) {
  const openSideBar = () => {
    document.getElementById('sidebar-menu').classList.toggle('collapsed');
  }

  return (
    <header>
      <nav className="nav-menu">
        <a className="logo" href="/"><img src={Logo}/></a>
        <ol className="list">
          <li><a href="/">Home</a></li>
          <li><a href="/state-of-parking/">State of Parking</a></li>
          <li><a href="/why-ai/">Why A.I?</a></li>
          <li><a href="/product/">Product</a></li>
        </ol>
        {/* FIXME Change span dynamically in login pages to back button. */}
        <span className="login-nav-item"><a href="/login/">Login</a></span>
      </nav>

      <div className="sidebar">
        <button title="Toggle Sidebar" onClick={openSideBar}></button>
        <nav id="sidebar-menu" className="collapsed">
          <ol className="list">
            <li><a href="/">Home</a></li>
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

export function Footer(props) {
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
