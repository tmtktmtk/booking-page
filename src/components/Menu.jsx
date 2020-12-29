import React, { Component, Fragment } from "react";
import "./Menu.css";

class Menu extends Component {
  state = { visible: false };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <Fragment>
        <header
          id="header"
          className={this.state.visible ? "fadeOut" : "fadeIn"}
        >
          <button className="menu" onClick={this.toggleMenu}>
            Menu
          </button>
        </header>
        <nav
          id="menu"
          className={this.state.visible ? "fadeIn" : "fadeOut"}
          onClick={this.toggleMenu}
        >
          <div>
            <p className="menutitle">MENU</p>
            <ul className="links">
              <li>
                <a href="#banner">Home</a>
              </li>
              <li>
                <a href="#one">Spotlights</a>
              </li>
              <li>
                <a href="#four">Features</a>
              </li>
              <li>
                <a href="https://example.com/">Stay with us</a>
              </li>
              <li>
                <a href="#footer">Admin</a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Menu;
