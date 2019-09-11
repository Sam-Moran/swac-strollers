import styles from "./Join.module.css";

import React, { Component } from "react";

class Join extends Component {
	render() {
		return (
			<div>
				<h1>Join us</h1>
				<p>
					Strollers is an inclusive running group, you can come and go as you
					please, however you are more than welcome to join the club with
					applcations open to all. There are two types of memberships for the
					club.
				</p>
				<h3>Social Membership</h3>
				<p>
					Our Social Membership at £10 for the year. This money goes towards our
					operating costs, such as hosting events or enabling our excellent
					volunteers to get qualifications so they can provide you the best
					possible support. This membership allows you free access to our
					Strollers groups and pays for itself very quickly if you are a
					regular.{" "}
				</p>
				<h3>Full Membership</h3>
				The other is full UKA membership which operates on a sliding scale
				depending on when in the year you join. The benefits of this membership
				are:
				<ul>
					<li>
						Registered athletes are able to compete in events exclusively
						available to registered athletes. Under UKA Rules for Competition
						many competitions, particularly track and field, are only open to
						registered athletes
					</li>
					<li>
						Discounted entry (minimum £2 for England Athletics registered
						athletes) to UKA licensed road races
					</li>
					<li>
						Eligible to compete for your club in road races (rather than as
						unattached if unregistered)
					</li>
					<li>
						Access to championship competitions for club athletes across
						numerous disciplines at a national, regional and local level
					</li>
					<li>
						Eligibility to compete in national representative teams and at
						England Athletics age group level
					</li>
					<li>
						Exclusive offers and discounts from a range of England Athletics’
						commercial partners, including DW Fitness First, InterContinental
						Hotels Group and AfterShokz, via The Edge newsletter – these are
						only available to England Athletics’ registered athletes
					</li>
					<li>
						The ability to have a say on how the sport is run and funded in a
						way that reflects your fundamental importance to the sport
					</li>
				</ul>
				<p>
					If you would like to join us our membership form can be found{" "}
					<a href="http://www.southportwaterlooac.co.uk/Aboutus/applnform.pdf">
						{" "}
						here
					</a>
					.
				</p>
			</div>
		);
	}
}

export default Join;
