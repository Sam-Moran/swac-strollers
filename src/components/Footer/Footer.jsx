import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/swaclogo.png";

const Footer = () => {
	return (
		<section className={styles.footer}>
			<img src={logo} alt="Logo" />
		</section>
	);
};

export default Footer;
