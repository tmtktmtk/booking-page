import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div class="inner">
          <h2 class="major">Get in touch</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <ul class="contact">
            <li class="icon solid fa-home">
              Untitled Inc
              <br />
              1234 Somewhere Road Suite #2894
              <br />
              Nashville, TN 00000-0000
            </li>
            <li class="icon solid fa-phone">(000) 000-0000</li>
            <li class="icon solid fa-envelope">
              <a href="#">information@untitled.tld</a>
            </li>
            <li class="icon brands fa-twitter">
              <a href="#">twitter.com/untitled-tld</a>
            </li>
            <li class="icon brands fa-facebook-f">
              <a href="#">facebook.com/untitled-tld</a>
            </li>
            <li class="icon brands fa-instagram">
              <a href="#">instagram.com/untitled-tld</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Footer;
