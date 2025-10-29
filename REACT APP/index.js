import React from "react";
import "./App.css";

function BookCard() {
  return (
    <div className="card">
      <h2>The Great Gatsby</h2>
      <p>by F. Scott Fitzgerald</p>
      <button onClick={() => alert("Added to cart!")}>Buy Now</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <center><h1>Book Store</h1></center>
      <BookCard />
    </div>
  );
}

export default App;
