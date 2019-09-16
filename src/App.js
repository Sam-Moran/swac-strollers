import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Groups from "./components/Groups/Groups";
import Join from "./components/Join/Join";
import Contact from "./components/Contact/Contact";
import Image from "./components/Image/Image";

import styles from "./App.module.css";

import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.page}>
          <Header />
          <div className={styles.image}>
            <Image />
          </div>

          <Router primary={false}>
            <Main path="/" />
            <Groups path="/groups" />
            <Join path="/join" />
            <Contact path="/contact" />
          </Router>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
