import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Google Books Search</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books/">
        Powered by Google Books
      </a>
    </div>
  );
}

export default Jumbotron;
