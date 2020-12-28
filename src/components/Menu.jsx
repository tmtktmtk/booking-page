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
          <button onClick={this.toggleMenu}>Menu</button>
        </header>
        <nav
          id="menu"
          className={this.state.visible ? "fadeIn" : "fadeOut"}
          onClick={this.toggleMenu}
        >
          <div>
            <h2>menu</h2>
            <ul className="links">
              <li>
                <a href="https://example.com/">Home</a>
              </li>
              <li>
                <a href="https://example.com/">Our Rooms</a>
              </li>
              <li>
                <a href="https://example.com/">Features</a>
              </li>
              <li>
                <a href="https://example.com/">Stay with us</a>
              </li>
              <li>
                <a href="https://example.com/">Admin</a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Menu;
