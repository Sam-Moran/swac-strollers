import React from "react";
import styles from "./Main.module.css";
import SideBar from "../SideBar/SideBar";
import Welcome from "../Welcome/Welcome";

const Main = () => {
	return (
		<div className={styles.main}>
			{/* <Image /> */}
			<section className={styles.body}>
				<Welcome />

				<SideBar />
			</section>
		</div>
	);
};

export default Main;
