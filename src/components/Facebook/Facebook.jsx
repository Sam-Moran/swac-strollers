import React from "react";
import styles from "./Facebook.module.css";

const Facebook = () => {
	return (
		<section className={styles.fb}>
			<div
				class="fb-page"
				data-href="https://www.facebook.com/swacstrollers/"
				data-tabs="timeline"
				data-width=""
				data-height=""
				data-small-header="true"
				data-adapt-container-width="true"
				data-hide-cover="false"
				data-show-facepile="true"
			>
				<blockquote
					cite="https://www.facebook.com/swacstrollers/"
					class="fb-xfbml-parse-ignore"
				>
					<a href="https://www.facebook.com/swacstrollers/">
						Southport Waterloo Strollers
					</a>
				</blockquote>
			</div>
		</section>
	);
};

export default Facebook;
