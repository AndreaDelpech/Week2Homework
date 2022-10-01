import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    setMessage(`It is currently 20°C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <br />
      <h3> {message} </h3>;
    </div>
  );
}
