import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Controllers/Navbar/Navbar";

let getdata = async function () {
  console.log("Hello H");
};

function Seller() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    fetch("http://localhost:4200/api/register", {
      method: "POST",
      body: formData,
    }).then((response) => {
      console.log("Response" + response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <input type="file" onChange={handleFileChange} />
      <br />
      <br />
      <button type="submit">Upload</button>
    </form>
  );
}

export default Seller;
