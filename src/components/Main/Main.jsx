import React from "react";
import styles from "./Main.module.css";
import SideBar from "../SideBar/SideBar";
import Image from "../Image/Image";
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
