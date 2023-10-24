import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h2>Welcome, {username} from {city}</h2>
    </div>
  );
}

export default Home;
