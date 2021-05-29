import React, { useRef } from "react";
import Logo from "Images/logo.gif";
import "Common/css-common-sections/header.css";
import "Common/css-common-sections/footer.css";
import "Common/css-common-sections/logo.css";

export function Header() {
  const secondaryNavRef = useRef(null);

  const showSecondaryNav = () =>
    secondaryNavRef.current.classList.toggle(
      "header__secondary-nav-menu_collapsed"
    );

  return (
    <header className="header">
      <nav className="header__primary-nav">
        <a className="logo" href="/">
          <img className="logo__img" src={Logo} alt="Website logo" />
        </a>
        <ol className="header__list header__list_type_primary">
          <li>
            <a
              className="header__link header__link_type_primary"
              href="/state-of-parking/"
            >
              State of Parking
            </a>
          </li>
          <li>
            <a
              className="header__link header__link_type_primary"
              href="/why-ai/"
            >
              Why A.I?
            </a>
          </li>
          <li>
            <a
              className="header__link header__link_type_primary"
              href="/product/"
            >
              Product
            </a>
          </li>
        </ol>
        <span className="header__login-link">
          <a id="loginlink" className="header__link" href="/account/">
            Account
          </a>
        </span>
      </nav>
      <div className="header__secondary-nav">
        <button
          type="button"
          className="header__secondary-nav-button"
          title="Toggle visibility of sidebar"
          onClick={showSecondaryNav}
        >
          Menu
        </button>
        <nav
          ref={secondaryNavRef}
          className="header__secondary-nav-menu header__secondary-nav-menu_collapsed"
        >
          <ol className="header__list header__list_type_secondary">
            <li>
              <a
                className="header__link header__link_type_secondary"
                href="/state-of-parking/"
              >
                State of Parking
              </a>
            </li>
            <li>
              <a
                className="header__link header__link_type_secondary"
                href="/why-ai/"
              >
                Why A.I?
              </a>
            </li>
            <li>
              <a
                className="header__link header__link_type_secondary"
                href="/product/"
              >
                Product
              </a>
            </li>
            <li>
              <a
                className="header__link header__link_type_secondary"
                href="/login/"
              >
                Login
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ol className="footer__list">
          <li>
            <a
              className="footer__link"
              href="https://github.com/Anukaw100/parking-detection-ml-website"
            >
              GitHub
            </a>
          </li>
          <li>
            <a className="footer__link" href="/contact/">
              Contact Us
            </a>
          </li>
        </ol>
      </nav>
    </footer>
  );
}
