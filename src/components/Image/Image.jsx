import React from "react";
import group from "../../images/group.png";
import styles from "./Image.module.css";

const Image = () => {
	return (
		<div className={styles.group}>
			<img className={styles.image} src={group} alt="Group" />
		</div>
	);
};

export default Image;
