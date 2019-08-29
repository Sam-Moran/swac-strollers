import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
	return (
		<div className={styles.body}>
			<h1>Running is for everyone!</h1>
			<p>
				There are so many obvious benefits to running but sometimes we’re a bit
				shy to get started. Our group is friendly, encouraging and supportive.
				It’s aimed at those of you who have maybe thought about giving running a
				try but need an extra push - well this is it!
				<br />
				<br />
				It doesn't matter how far along you are in your running journey, if
				you're wanting to run your first Parkrun or dreaming of that half
				marathon
				<strong> we are the club for you.</strong>
				<br />
				<br />
				We open to all you want to run, with two sessions a week ran by qualified (Leadership in Running Fitness) volunteers
			</p>
		</div>
	);
};

export default Welcome;
