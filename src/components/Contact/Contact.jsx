// eslint-disable-next-line
import "./Contact.css";

import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div class="text">
        <h1>Contact us!</h1>
        <p>
          Any questions? Pop a messsage into the form below and we'll get back
          to you as soon as possible.
        </p>
        <div class="container">
          <form
            action="https://send.pageclip.co/cp8YPGKIMQYNBsV6YmRKTBgWeYexbgFM"
            class="pageclip-form"
            method="post"
          >
            <div class="row">
              <div class="col-25">
                <label for="fname">Name:</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name..."
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="email">Email address:</label>
              </div>
              <div class="col-75">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@google.com"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="message">Message:</label>
              </div>
              <div class="col-75">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
            </div>
            <div class="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
