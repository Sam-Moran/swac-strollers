import React from "react";
import Strava from "../Strava/Strava";
import Facebook from "../Facebook/Facebook";
import styles from "./SideBar.module.css";

const SideBar = () => {
	return (
		<div className={styles.feeds}>
			<h1>Social</h1>
			<div>
				<Facebook />
				<Strava />
			</div>
		</div>
	);
};

export default SideBar;
