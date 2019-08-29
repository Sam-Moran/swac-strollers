import React from "react";
import styles from "./Header.module.css";
import Links from "../Links/Links";
import logo from "../../images/swac.png";
import swac from "../../images/swacrunning.png";

const Header = () => {
	return (
		<div className={styles.header}>
			<section className={styles.wrap}>
				<img src={swac} alt="swac" />

				<section className={styles.main}>
					<h1>Southport Waterloo Strollers</h1>
					<h5>A friendly & supportive beginners running group in Southport</h5>
				</section>
			</section>
			<Links />
		</div>
	);
};

export default Header;
