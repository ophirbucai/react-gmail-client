import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="content">
      <h1>Welcome to Gmail</h1>
      <p>Stay organized and connected with Gmail.</p>
      <Link to="/inbox" className="primary-button">
        Get Started
      </Link>
    </div>
  );
}
