import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import { Router } from "@reach/router";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<Main path="/" />
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
