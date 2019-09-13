// eslint-disable-next-line
import styles from "./Groups.module.css";
import { Link } from "@reach/router";

import React, { Component } from "react";

class Groups extends Component {
  render() {
    return (
      <div>
        <h1>Groups</h1>
        <p>
          We have two groups through the week, you are welcome to join any and
          all these sessions. Free for SWAC members (
          <Link to="/join" key="join">
            Join us
          </Link>
          ) or just £1 per session.
        </p>
        <h3>Tuesday's</h3>
        <p>
          Malcom is the run leader for this group which meets every Tuesday
          morning at 9:30am. 5k run & 3k walk/run (jeffing).
          <br />
          <br />
          Location: Meet under the pier opposite McDonalds (PR8 1SA). Free
          parking is avaliable for up to three hours.
        </p>
        <h3>Thursdays</h3>
        <p>
          Sarah, Michelle and Malcolm are the run leaders for our main Strollers
          session of the week.
        </p>
      </div>
    );
  }
}

export default Groups;
