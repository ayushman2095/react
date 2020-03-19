import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Home</h1>
      <p>React , react-router for web pages</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}
export default HomePage;
