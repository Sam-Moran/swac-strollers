import React from "react";
import styles from "./Strava.module.css";

const Strava = () => {
	return (
		<div className={styles.strava}>
			<iframe
				title="Strava"
				allowtransparency
				frameborder="0"
				height="160"
				scrolling="no"
				src="https://www.strava.com/clubs/489067/latest-rides/2bd251dd02f4134d1a5e483ae35118016a803ef0?show_rides=false"
				width="300"
			></iframe>
		</div>
	);
};

export default Strava;
