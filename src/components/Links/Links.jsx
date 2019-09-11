import React from "react";
import styles from "./Links.module.css";
import { Link } from "@reach/router";

const Links = () => {
	return (
		<div className={styles.links}>
			<p>
				<Link to="/" key="home" className={styles.link}>
					Home
				</Link>{" "}
				|{" "}
				<Link to="/groups" key="groups" className={styles.link}>
					Groups
				</Link>{" "}
				|{" "}
				<Link to="/join" key="join" className={styles.link}>
					Join
				</Link>{" "}
				|{" "}
				<Link to="/contact" key="contact" className={styles.link}>
					Contact
				</Link>
			</p>
		</div>
	);
};

export default Links;
