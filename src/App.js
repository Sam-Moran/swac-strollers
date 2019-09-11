import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Groups from "./components/Groups/Groups";
import Join from "./components/Join/Join";
import Contact from "./components/Contact/Contact";

import styles from "./App.module.css";

import { Router } from "@reach/router";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className={styles.page}>
					<Router primary={false}>
						<Main path="/" />
						<Groups path="/groups" />
						<Join path="/join" />
						<Contact path="/contact" />
					</Router>
				</div>

				<Footer />
			</div>
		);
	}
}

export default App;
